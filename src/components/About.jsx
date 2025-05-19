import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { title } from 'framer-motion/client';
// import { max } from 'three/examples/jsm/nodes/Nodes.js';
// import { scale } from 'maath/dist/declarations/src/vector2';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>

  )
}
const About = () => {
  return (
    <>
      {/* variant for animation */}
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        {/* I am a skilled software developer with experience
        in Mobile App Development using flutter and Web Development
        using MERN Stack. I am a quick learner and collaborate closely
        with clients to create efficient, scalable, and user-friendly solutions
        that solve real-world problems. Let's work together to bring your ideas to life! */}

        I am a skilled MERN Stack Developer with over a year of hands-on experience,
        complemented by strong expertise in Mobile App Development. I have worked on a variety of real-world
        projects, delivering scalable, efficient, and user-centric solutions across
        both web and mobile platforms. I am a fast learner who thrives in collaborative environments,
        working closely with clients and teams to turn ideas into impactful digital products.
        Let’s work together to build something great!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}{...service} />
        ))}
        {/* ...service can spread all the services we are getting from the service, index on which we are looping */}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")