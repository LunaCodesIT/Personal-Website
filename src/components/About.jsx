import React from "react"

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
       <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-
      [1px] rounded-[20px] shadow-card'>

<div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px]
         py-5 px-12 min-h-[280px] flex 
         justify-evenly items-center flex-col'
        >
           <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
         <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>

        </div>
      </motion.div>

    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

       So yeah, I'm a career-switch guy. <br /> <br /> In other words, I was a full-time BCOM student at Rhodes University majoring
       in Economics and Management until cognitive dissonance kicked in around 2017. By mid-2018, I was certain about not wanting to pursue a career as an economist after reading articles
       and predictions regarding Information Technology. That's when I started watching HTML, CSS, and JavaScript tutorials. By the beginning of 2019, I was already coding my first website 
       using HTML, CSS, JavaScript, Photoshop, Premiere Pro and After Effects. As that year went by, I started using React and continued to use it throughout 2020 developing beautiful, futuristc, and interactive User Interfaces. <br /> <br /> In 2021, I spontaneously
       enrolled in a 2-year Web Development vocational course at CTU Training Solutions where I developed many real-world apps and websites (which is regarded as 1-2 years work experience). I would even go as far as saying my Frontend skills were and are 
       better than the skills of many Senior Frontend Developers. In 2022, which was my final year at CTU, I was taught Backend skills using PHP, Node.js, Java, C#, MySQL, and Python. I
       completed the course at the end of 2022 and graduated in April, 2023. Although I've done some freelance work, I am now looking to get hired by a company. My main stack includes (but not limited to)
       JavaScript, TypeScript, React, Redux, Node.js, Firebase, Postman, and the entire Adobe Creative Cloud. See my work as you scroll and feel free to interact with the 3D elements by hovering, touching or clicking &#128513;


      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </>

      
  )
}


export default SectionWrapper(About, "about");