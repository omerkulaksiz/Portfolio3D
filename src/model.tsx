import {Environment, Html, useGLTF,} from "@react-three/drei";
// import {useRef} from "react";
// import {DirectionalLightHelper, SpotLightHelper} from "three";

export default function Model() {
    const model = useGLTF("office.glb");
    // // @ts-ignore
    // const lightRef = useRef();
    // const amRef = useRef(null);
    // // @ts-ignore
    // useHelper(lightRef, DirectionalLightHelper, 3, "red");
    return(
        <>
            <Environment preset={"night"}></Environment>
            <primitive object={model.scene}>
            <Html wrapperClass="model" position={[0.03,5.56,2.35]}
                  transform
                  rotation={[0, 1.57, 0]}
                  // rotation-y={1.6}
                  // rotation-z={0}
                  // rotation-x={0}

                distanceFactor={0.5}>
                <iframe src="https://chefvolkan.netlify.app"></iframe>
            </Html>
                </primitive>
        </>
    )


}
