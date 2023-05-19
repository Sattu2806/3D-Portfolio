import React, {useEffect} from 'react'
import Text from './Text'
import { useAnimation,motion} from "framer-motion"
import {useInView} from "react-intersection-observer"
import Spots from './spots'

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
      if (inView) {
        controls.start("show");
      }
    }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, scale:0 },
    show: {
      opacity: 1, scale: 1 
    },
  };
  return (
    <section id='about' className='relative xl:-mt-[30px] md:mt-[100px] mt-[10px] lg:w-10/12 w-11/12 mx-auto '>
    <div className='grid md:grid-cols-2 grid-cols-1 md:w-full w-11/12 mx-auto'>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={imageVariants}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
       className="image image-wrapper md:block hidden">
        <img className='max-w-[600px]' src="/image.jpg" alt="" />
      </motion.div>
      <Text />
      <Spots />
    </div>
    </section>
  )
}

export default About