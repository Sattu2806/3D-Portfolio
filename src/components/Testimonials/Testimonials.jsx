import React,{useRef} from 'react'
import {motion} from "framer-motion"

const Testimonials = () => {

  return (
    <div id='testimonials' className='md:w-10/12 mx-auto w-11/12 py-10 mb-32'>
        <motion.div initial={{opacity: 0, y: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, y: 0 }}
                    transition={{ duration: 0.6 }} 
                    className="border-b-2 text-4xl pink-text-gradient inline-block border-pink-600 mb-20">
                <h2 className=" p-1">Testimonials</h2>
        </motion.div>
        <div className='w-10/12 mx-auto'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-10'>
                <motion.div initial={{opacity: 0, x: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}  
                    className='border-2  border-neutral-400 rounded-xl p-2 relative text-center'>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-neutral-300'>"Working with Satender was an absolute pleasure. Their expertise and attention to detail brought our website to life. They had a deep understanding of our requirements and delivered a stunning, user-friendly website that exceeded our expectations. Their professionalism, prompt communication, and technical skills make them a top-notch web developer."</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>Lionard Vinci</h1>
                    <p className='mb-6 mt-1 text-sm italic text-neutral-400'>Web Developer</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/client2.jpg" alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, x: 150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className='border-2 border-neutral-400 rounded-xl p-2 relative text-center'>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-neutral-300'>"I highly recommend Satender for any web development project. They transformed our outdated website into a modern, responsive platform that boosted our online presence. Their creative approach, combined with their ability to understand our business needs, resulted in an exceptional website that has received praise from our clients and improved our conversion rates. Satender is reliable, efficient, and a true professional in the field."</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>Lola Gracia</h1>
                    <p className='mb-6 mt-1 text-sm italic text-neutral-400'>Product Manager</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/client1.jpg" alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, x: -150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}  
                    className='border-2  border-neutral-400 rounded-xl p-2 relative text-center'>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-neutral-300'>"I can't thank Satender enough for their outstanding work on our e-commerce website. They not only created a visually stunning and user-friendly platform but also implemented powerful features that enhanced our online sales. Their technical expertise, problem-solving skills, and dedication to delivering a high-quality product were truly impressive. Satender is a reliable and talented web developer who I would recommend to anyone seeking exceptional web development services."</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>Lisa Adams</h1>
                    <p className='mb-6 mt-1 text-sm italic text-neutral-400'>Director of Marketing at Global Solutions Inc</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/client3.png
                        " alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity: 0, x: 150 }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileInView={{opacity: .8, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className='border-2 border-neutral-400 rounded-xl p-2 relative text-center'>
                    <p className='text-sm mb-8 mt-4 w-10/12 mx-auto text-neutral-300'>"We are extremely satisfied with the web development services provided by Satender. Their technical skills, combined with their excellent project management, resulted in a seamless and efficient development process. They were attentive to our needs, responsive to our feedback, and delivered a website that perfectly aligned with our vision. Satender is a talented and reliable professional who I would recommend to anyone looking for top-quality web development services."</p>
                    <h1 className='mt-2 text-xl blue-text-gradient'>Sarah Johnson</h1>
                    <p className='mb-6 mt-1 text-sm italic text-neutral-400'>CEO of Innovate Technologies</p>
                    <div className='w-10 h-10 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                        <img className='w-full h-full rounded-full object-cover object-center' src="/client4.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials