'use client'
import { Canvas } from "@react-three/fiber"
import { ACESFilmicToneMapping } from "three"
import Light from "./Light"


export default function Scene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 3] }}
            gl={{ toneMapping: ACESFilmicToneMapping, toneMappingExposure: 2.5 }}
        >
            <pointLight intensity={11} />
            <Light position={[0,0,0]}/>
        </Canvas>
    )
}