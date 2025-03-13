import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { useLoader } from '@react-three/fiber';
import './App.css';
import Model from "./model.tsx";


// function OfficeModel() {
//     const gltf = useLoader(GLTFLoader, '/office.glb');
//     console.log(gltf.scene);
//     return (
//         <primitive object={gltf.scene}  />)
// }
// function Lights() {
//     return (
//         <>
//             <ambientLight/>
//             <directionalLight position={[7, 15, -3]} intensity={1.4} />
//             <spotLight position={[0, 13.3, 0]} intensity={2} distance={20} />
//
//
//         </>
//     );
// }



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
                maxAzimuthAngle={Math.PI * 0.8}
                minAzimuthAngle={Math.PI * 0.2}
                maxDistance={17}
                minDistance={17}
            />
            {/*<OfficeModel />*/}
            <Model></Model>
            <fog attach="fog" args={['#080606', 25, 30]} />
        </Canvas>
    );
}

export default App;
