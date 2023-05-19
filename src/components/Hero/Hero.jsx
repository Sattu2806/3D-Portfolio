import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { HeroDisplay } from '../../assets/WebsiteAssets1'
import { Bloom, EffectComposer} from '@react-three/postprocessing'
import { SSAO } from '@react-three/postprocessing'
import LeftPart from './LeftPart'

const Hero = () => {
    const [isToggle, setIsToggle] = useState(false)
  return (
    <div className='w-11/12 mt-20 lg:pt-0 pt-20 md:mb-40 mb-20 mx-auto md:grid md:grid-cols-2 lg:w-10/12 z-0 flex items-center flex-col-reverse'>
        <div className='flex flex-col justify-center'>
            <LeftPart/>
        </div>
        <div className='lg:h-[600px] md:h-[400px] h-[400px]  w-full flex items-center justify-center '>
            <Canvas>
                <ambientLight intensity={2} />
                {/* <pointLight  position={[10, 10, 1]} /> */}
                <spotLight position={[25, 20, 10]}/>
                <HeroDisplay isToggle = {isToggle}/>
                <PerspectiveCamera makeDefault position={[12,2,22]}/>
                <OrbitControls
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI - Math.PI / 6}
                    enableDamping={true}
                    enablePan={false}
                    maxZoom={0}
                />
                <EffectComposer smaa >
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={0.5}/>
                    <SSAO/>
                </EffectComposer>
                
            </Canvas>
        </div>
    </div>
  )
}

export default Hero