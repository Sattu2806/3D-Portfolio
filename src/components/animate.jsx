import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

const Animate = () => {
    useFrame(() => {

        if(!myMesh.current){
            return
        }

        myMesh.current.rotation.x += 0.01
        myMesh.current.rotation.y += 0.01
        
    })
    
    const myMesh = useRef()
  return (
    <mesh ref={myMesh}>
          <boxGeometry args={[3, 3, 3]}/>
          <meshStandardMaterial />
    </mesh>
  )
}

export default Animate