// import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';
import './App.css';


// function Torus() {
//     const mesh = useRef<THREE.Mesh>(null!);
//
//     useFrame(() => {
//         if (mesh.current) {
//             mesh.current.rotation.x += 0.01;
//             mesh.current.rotation.y += 0.005;
//             mesh.current.rotation.z += 0.01;
//         }
//     });
//
//     return (
//         <mesh ref={mesh} position={[0, 10, 0]}>
//             <torusGeometry args={[7, 2, 16, 90]} />
//             <meshStandardMaterial color="#FF6347" wireframe={false} />
//         </mesh>
//     );
// }

// function Plane() {
//     return (
//         <mesh position={[-10, -10, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//             <planeGeometry args={[75, 75, 10, 10]} />
//             <meshStandardMaterial
//                 color="white"
//                 side={THREE.DoubleSide}
//                 metalness={0.5}
//                 roughness={0.7}
//             />
//         </mesh>
//     );
// }

function OfficeModel() {
    const gltf = useLoader(GLTFLoader, '/office.glb');

    return <primitive object={gltf.scene} />;
}

function Lights() {
    return (
        <>
            <directionalLight position={[7, 15, -3]} intensity={1.4} />
            <spotLight position={[0, 13.3, 0]} intensity={30} distance={20} />

        </>
    );
}



function App() {
    return (
        <Canvas
            style={{ width: '100vw', height: '100vh' }}
            camera={{ position: [0, 10, 17], fov: 75 }}
        >
            <color attach="background" args={['#080606']} />
            <OrbitControls
                minPolarAngle={0.7}
                maxPolarAngle={Math.PI * 0.35}
                maxAzimuthAngle={Math.PI * 0.7}
                minAzimuthAngle={Math.PI * 0.2}
                maxDistance={17}
                minDistance={14}
            />
            <OfficeModel />
            <Lights />
        </Canvas>
    );
}

export default App;
