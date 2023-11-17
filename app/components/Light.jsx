import { useRef } from 'react'
import { MeshTransmissionMaterial } from "@react-three/drei"
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export default function Light() {
    const ref = useRef()
    let min_quality = 30
    let max_quality = 90
    let min_width = 400
    let max_width = 1200

    useFrame((state, delta) => {
        min_quality = 3
        ref.current.intensity = Math.abs(Math.sin(state.clock.elapsedTime / 0.8) * 5)
        console.log(window.innerWidth)
    })

    return (
        <mesh>
            <pointLight
                intensity={0} ref={ref}
            />
            <sphereGeometry args={[1, 5, 2]} />
            <MeshTransmissionMaterial
                background={new THREE.Color('#ff0000')}
                backside={true}
                samples={4}
                resolution={90}
                transmission={0.15}
                roughness={0.1}
                thickness={0.2}
                ior={10}
                anisotropy={3}
                distortion={0.4}
                distortionScale={300}
                temporalDistortion={0.1}
                attenuationColor="#ffffff"
                color="#ff0000" />
        </mesh>
    )
}