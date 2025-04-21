import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Custom shader for the fire effect
class FireMaterial extends THREE.ShaderMaterial {
  constructor () {
    super({
      defines: { ITERATIONS: "20", OCTIVES: "3" },
      uniforms: {
        fireTex: { value: null },
        color: { value: new THREE.Color(0.8, 0.05, 0.01) },
        time: { value: 0.0 },
        seed: { value: Math.random() * 10.0 },
        invModelMatrix: { value: new THREE.Matrix4() },
        scale: { value: new THREE.Vector3(1, 1, 1) },
        noiseScale: { value: new THREE.Vector4(1, 2, 1, 0.3) },
        magnitude: { value: 2.5 },
        lacunarity: { value: 3.0 },
        gain: { value: 0.6 },
      },
      vertexShader: `
        varying vec3 vWorldPos;
        varying vec3 vPosition;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          vPosition = position;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        uniform float seed;
        uniform mat4 invModelMatrix;
        uniform vec3 scale;
        uniform vec4 noiseScale;
        uniform float magnitude;
        uniform float lacunarity;
        uniform float gain;
        uniform sampler2D fireTex;
        varying vec3 vWorldPos;
        varying vec3 vPosition;

        // GLSL noise functions from https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
        vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

        float noise(vec3 P){
          vec3 Pi0 = floor(P);
          vec3 Pi1 = Pi0 + vec3(1.0);
          Pi0 = mod(Pi0, 289.0);
          Pi1 = mod(Pi1, 289.0);
          vec3 Pf0 = fract(P);
          vec3 Pf1 = Pf0 - vec3(1.0);
          vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
          vec4 iy = vec4(Pi0.yy, Pi1.yy);
          vec4 iz0 = Pi0.zzzz;
          vec4 iz1 = Pi1.zzzz;

          vec4 ixy = permute(permute(ix) + iy);
          vec4 ixy0 = permute(ixy + iz0);
          vec4 ixy1 = permute(ixy + iz1);

          vec4 gx0 = ixy0 / 7.0;
          vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
          gx0 = fract(gx0);
          vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
          vec4 sz0 = step(gz0, vec4(0.0));
          gx0 -= sz0 * (step(0.0, gx0) - 0.5);
          gy0 -= sz0 * (step(0.0, gy0) - 0.5);

          vec4 gx1 = ixy1 / 7.0;
          vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
          gx1 = fract(gx1);
          vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
          vec4 sz1 = step(gz1, vec4(0.0));
          gx1 -= sz1 * (step(0.0, gx1) - 0.5);
          gy1 -= sz1 * (step(0.0, gy1) - 0.5);

          vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
          vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
          vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
          vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
          vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
          vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
          vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
          vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

          vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
          g000 *= norm0.x;
          g010 *= norm0.y;
          g100 *= norm0.z;
          g110 *= norm0.w;
          vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
          g001 *= norm1.x;
          g011 *= norm1.y;
          g101 *= norm1.z;
          g111 *= norm1.w;

          float n000 = dot(g000, Pf0);
          float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
          float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
          float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
          float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
          float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
          float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
          float n111 = dot(g111, Pf1);

          vec3 fade_xyz = fade(Pf0);
          vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
          vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
          float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
          return 2.2 * n_xyz;
        }

        float fbm(vec3 x) {
          float v = 0.0;
          float a = 0.5;
          vec3 shift = vec3(100);
          for (int i = 0; i < OCTIVES; ++i) {
            v += a * noise(x);
            x = x * lacunarity + shift;
            a *= gain;
          }
          return v;
        }

        void main() {
          vec3 nPos = vPosition * noiseScale.xyz * 0.1;
          nPos.y += time * 0.5 * noiseScale.w;
          
          float noise = fbm(nPos + seed);
          
          // Base fire shape
          float y = vPosition.y * 2.0 + 0.5;
          float v = 1.0 - pow(y, 1.5); // Taper at the top
          
          // Edge fading
          float edge = 1.0 - length(vPosition.xz) * 1.5;
          edge = max(edge, 0.0);
          
          // Combine noise and shape
          float fireIntensity = noise * v * edge;
          fireIntensity = pow(fireIntensity, 1.0); // Adjust contrast
          
          // Color gradient from yellow to red
          vec3 fireColor = mix(
            vec3(1.0, 0.5, 0.0),  // Orange
            vec3(1.0, 0.9, 0.2),  // Yellow
            pow(fireIntensity, 2.0)
          );
          
          // Add red at the base
          fireColor = mix(
            vec3(0.8, 0.1, 0.0),  // Red
            fireColor,
            min(y * 2.0, 1.0)
          );
          
          // Apply alpha based on intensity
          float alpha = smoothstep(0.0, 0.2, fireIntensity);
          
          // Output final color
          gl_FragColor = vec4(fireColor, alpha);
          
          // Apply additional glow at the center
          float glow = max(0.0, 1.0 - length(vPosition.xz) * 2.0);
          gl_FragColor.rgb += vec3(1.0, 0.7, 0.3) * glow * 0.5;
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
  }
}

// Register the custom material
extend({ FireMaterial });

// Fire component
function Fire() {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  // Create a cone geometry for the fire
  const geometry = useMemo(() => {
    return new THREE.ConeGeometry(1, 2, 32, 10);
  }, []);

  // Update the fire animation
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();

      if (meshRef.current) {
        const matrix = new THREE.Matrix4().invert(meshRef.current.matrixWorld);
        materialRef.current.uniforms.invModelMatrix.value = matrix;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
      <primitive object={geometry} attach="geometry" />
      <fireMaterial ref={materialRef} />
    </mesh>
  );
}

// Embers effect
function Embers() {
  return <Sparkles count={50} scale={[3, 5, 3]} size={0.6} speed={0.3} color="#ff4500" position={[0, 1, 0]} />;
}

// Light from the fire
function FireLight() {
  const lightRef = useRef(null);

  useFrame(({ clock }) => {
    if (lightRef.current) {
      // Simulate flickering
      const time = clock.getElapsedTime();
      const flicker = 0.95 + 0.05 * Math.sin(time * 10) + 0.05 * Math.sin(time * 20);
      lightRef.current.intensity = 2 * flicker;
    }
  });

  return <pointLight ref={lightRef} position={[0, 1, 0]} color="#ff6000" intensity={2} distance={6} decay={2} />;
}

// Ground/base for the fire
function Ground() {
  return (
    <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[2, 32]} />
      <meshStandardMaterial color="#222" roughness={0.8} metalness={0.2} emissive="#330000" emissiveIntensity={0.2} />
    </mesh>
  );
}

// Main scene component
function FireScene() {
  return (
    <>
      <color attach="background" args={["#000"]} />
      <ambientLight intensity={0.1} />

      <Ground />
      <Fire />
      <Embers />
      <FireLight />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.5}
      />

      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
      </EffectComposer>
    </>
  );
}

function FireBackground({ className = "" }) {
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
        <FireScene />
      </Canvas>
    </div>
  );
}

export default FireBackground;