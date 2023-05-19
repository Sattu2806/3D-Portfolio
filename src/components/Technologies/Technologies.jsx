import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  useTexture,
  Box,
} from "@react-three/drei";
import { motion } from "framer-motion";

function Boxes(props) {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const textures = [
    useTexture("/Js.jpg"),
    useTexture("/Css.jpg"),
    useTexture("/Html.jpg"),
    useTexture("/React.jpg"),
    useTexture("/Node.jpg"),
    useTexture("/Next.jpg"),
    useTexture("/Django.jpg"),
    useTexture("/Sql.jpg"),
    useTexture("/Mongo.jpg"),
    useTexture("/Blender.jpg"),
    useTexture("/Three.jpg"),
  ];
  const texture = textures[props.index];
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.8 : 1.3}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial
        map={texture}
        color={active ? "#fff" : "#eee"}
        flatShading={true}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

function ThreeContent() {
  return (
    <>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <PerspectiveCamera makeDefault position={[5, 3, 10]} />
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
        enableDamping={true}
        enablePan={false}
        enableZoom={false}
      />
    </>
  );
}

const Technologies = () => {
  const boxes = [
    { position: [-1.2, 0, 0], index: 0 },
    { position: [-1.2, 0, 0], index: 1 },
    { position: [-1.2, 0, 0], index: 2 },
    { position: [-1.2, 0, 0], index: 3 },
    { position: [-1.2, 0, 0], index: 4 },
    { position: [-1.2, 0, 0], index: 5 },
    { position: [-1.2, 0, 0], index: 6 },
    { position: [-1.2, 0, 0], index: 7 },
    { position: [-1.2, 0, 0], index: 8 },
    { position: [-1.2, 0, 0], index: 9 },
    { position: [-1.2, 0, 0], index: 10 },
  ];

  return (
    <div className="md:w-10/12 mx-auto w-11/12 py-10" id="technologies">
      <div>
        <div className="bg-gradient-to-r from-[#8f145d] to-[#bd4a4a] inline-block mb-6">
          <h2 className="text-3xl p-1">Technologies</h2>
        </div>
        <p className="italic text-neutral-300 mt-[-7px]">
          Technologies I work with
        </p>
      </div>
      <div className="grid xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 ">
        {boxes.map((box, index) => (
          <motion.div
            key={box.index}
            initial={{ opacity: 0, x: 100 }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Suspense fallback={null}>
              <Canvas>
                <ThreeContent />
                <Boxes position={box.position} index={box.index} />
              </Canvas>
            </Suspense>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
