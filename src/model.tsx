import {Environment, useGLTF, useHelper} from "@react-three/drei";
import {useRef} from "react";
import {DirectionalLightHelper, SpotLightHelper} from "three";

export default function Model() {
    const model = useGLTF("office.glb");
    // @ts-ignore
    const lightRef = useRef();
    const amRef = useRef(null);
    // @ts-ignore
    useHelper(lightRef, DirectionalLightHelper, 3, "red");
    return(
        <>
            <Environment preset={"night"}></Environment>
            <primitive object={model.scene}  />
        </>
    )


}
