import { MeshTransmissionMaterial } from "@react-three/drei"
import { SphereGeometry } from "three"
import * as THREE from 'three'

export default function Light(props) {
    return (
        <mesh {...props}>
            <sphereGeometry/>
            <MeshTransmissionMaterial 
            background={new THREE.Color('#ff0000')} 
            backside={true} 
            samples={2} 
            resolution={80} 
            transmission={0.2} 
            roughness={0} 
            thickness={0.45} 
            ior={3.5}
            anisotropy={1.4} 
            distortion={0.1} 
            distortionScale={1} 
            temporalDistortion={0.5} 
            clearcoat={1} 
            attenuationDistance={0.5} 
            attenuationColor="#ffffff" 
            color="#ff0000" />
        </mesh>
    )
}