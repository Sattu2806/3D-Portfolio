import React,{useEffect} from 'react'
import { useAnimation,motion} from "framer-motion"
import {useInView} from "react-intersection-observer"

const Spots = () => {
    const item = {
        hidden: { opacity: 0, x:100  },
        show: { opacity: 1, x:0,transition:{type: 'spring'} },
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("show");
        }
        }, [controls, inView]);
  return (
    <motion.div variants={container} initial="hidden"  animate={controls} ref={ref} className='md:block hidden' >
            <motion.svg variants={item} initial='hidden' animate={controls} ref={ref} className='absolute w-5 left-4 bottom-6' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#BB0066" d="M39.2,-59.2C49.6,-61.9,55.9,-48.9,64.5,-36.5C73,-24,83.8,-12,79.5,-2.4C75.3,7.1,56.1,14.2,42.7,18.2C29.2,22.2,21.6,23.2,15.4,30.1C9.3,37.1,4.6,50,-3.2,55.5C-11,61,-21.9,59,-34.6,55.8C-47.3,52.6,-61.6,48.2,-58.6,38.7C-55.5,29.2,-35.1,14.6,-36.2,-0.6C-37.3,-15.9,-60,-31.8,-63.4,-41.9C-66.8,-52,-50.8,-56.2,-37,-51.4C-23.2,-46.7,-11.6,-33.1,1.4,-35.5C14.4,-37.9,28.8,-56.4,39.2,-59.2Z" transform="translate(100 100)" />
            </motion.svg>
            <motion.svg variants={item} initial='hidden' animate={controls} ref={ref} className='absolute w-2 left-1 top-20' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#8A3FFC" d="M21.4,-43.7C28.5,-33.1,35.4,-28.8,38.9,-22.5C42.4,-16.3,42.3,-8.2,43.2,0.5C44,9.1,45.7,18.3,46.4,31.6C47,44.9,46.6,62.4,38.7,64.3C30.8,66.2,15.4,52.5,2.2,48.7C-11,45,-22,51.1,-28.3,48.2C-34.5,45.4,-36.1,33.5,-47.1,24C-58.2,14.5,-78.8,7.2,-79.7,-0.5C-80.6,-8.2,-61.6,-16.4,-50.2,-25.3C-38.8,-34.2,-34.8,-43.8,-27.7,-54.4C-20.6,-64.9,-10.3,-76.5,-1.5,-73.8C7.2,-71.1,14.4,-54.2,21.4,-43.7Z" transform="translate(100 100)" />
            </motion.svg>
            <motion.svg variants={item} initial='hidden' animate={controls} ref={ref} className='absolute w-8 left-64 top-10' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FA4D56" d="M71.9,-18.1C80.8,4,67.2,38.8,43.9,54.2C20.7,69.6,-12.1,65.7,-31.6,50C-51.2,34.3,-57.5,6.8,-50,-13.4C-42.6,-33.6,-21.3,-46.5,5.1,-48.1C31.5,-49.8,63,-40.3,71.9,-18.1Z" transform="translate(100 100)" />
            </motion.svg>
            <motion.svg variants={item} initial='hidden' animate={controls} ref={ref} className='absolute w-6 left-80 bottom-12' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#9FF0F0" d="M37.9,-65.9C47.3,-60.3,51.6,-46.3,55.4,-33.9C59.2,-21.6,62.4,-10.8,53.3,-5.3C44.1,0.2,22.7,0.5,15.4,6.7C8,12.9,14.7,25,14.5,36C14.3,47,7.2,56.9,-3.6,63C-14.3,69.2,-28.5,71.6,-36.9,65.4C-45.4,59.1,-47.9,44.1,-54.6,31.8C-61.2,19.4,-71.8,9.7,-69.7,1.2C-67.6,-7.3,-52.7,-14.6,-44.4,-24C-36.1,-33.5,-34.5,-45.1,-28.1,-52.4C-21.8,-59.8,-10.9,-62.8,1.7,-65.7C14.3,-68.7,28.6,-71.5,37.9,-65.9Z" transform="translate(100 100)" />
            </motion.svg>
            <motion.svg variants={item} initial='hidden' animate={controls} ref={ref} className='absolute w-4 left-96 bottom-32' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#8A3FFC" d="M11.7,-32.9C14.9,-18.4,17.1,-14.7,18.9,-11.1C20.7,-7.4,22,-3.7,19.5,-1.5C17,0.8,10.5,1.6,12.7,12.2C15,22.8,25.9,43.3,25.2,47.4C24.5,51.5,12.3,39.2,6,28.9C-0.3,18.5,-0.6,10.1,-13.1,12.8C-25.6,15.5,-50.3,29.4,-62.6,29.1C-74.8,28.9,-74.6,14.4,-74.2,0.2C-73.9,-14,-73.4,-28.1,-62.6,-30.8C-51.7,-33.5,-30.5,-24.8,-18.4,-34.2C-6.2,-43.6,-3.1,-71.1,0.6,-72.1C4.2,-73.1,8.5,-47.5,11.7,-32.9Z" transform="translate(100 100)" />
            </motion.svg>
            <motion.svg variants={item} initial='hidden' animate={controls} ref={ref} className='absolute w-3 left-24 top-10' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FA4D56" d="M11.7,-32.9C14.9,-18.4,17.1,-14.7,18.9,-11.1C20.7,-7.4,22,-3.7,19.5,-1.5C17,0.8,10.5,1.6,12.7,12.2C15,22.8,25.9,43.3,25.2,47.4C24.5,51.5,12.3,39.2,6,28.9C-0.3,18.5,-0.6,10.1,-13.1,12.8C-25.6,15.5,-50.3,29.4,-62.6,29.1C-74.8,28.9,-74.6,14.4,-74.2,0.2C-73.9,-14,-73.4,-28.1,-62.6,-30.8C-51.7,-33.5,-30.5,-24.8,-18.4,-34.2C-6.2,-43.6,-3.1,-71.1,0.6,-72.1C4.2,-73.1,8.5,-47.5,11.7,-32.9Z" transform="translate(100 100)" />
            </motion.svg>
    </motion.div>
  )
}

export default Spots