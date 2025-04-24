import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';
import { saurav } from '../assets';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
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
);

const About = () => {
  return (
    <>
      {/* Introduction Section with Photo */}
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Hi, I'm Shashank Kumar, a CSE undergrad at Lovely Professional University with a strong passion for cloud computing, especially Amazon Web Services (AWS). I have a solid foundation in Data Structures & Algorithms, Linux, and backend development with Java.
I'm currently focused on leveraging AWS services like EC2, S3, Lambda, and security best practices to build and deploy scalable Java-based cloud applications. Beyond tech, I'm also a team player and leader, with valuable experience from participating in zonal-level sports, which has shaped my communication and collaboration skills in tech environments.
          </motion.p>
        </div>

        {/* Photo with Animated Lighting Effect */}
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="flex justify-center items-center mt-10 lg:mt-0"
        >
          <motion.div
            className="relative w-[250px] h-[250px] rounded-full p-[4px]"
            animate={{
              boxShadow: [
                "0 0 20px rgba(128, 93, 238, 0.5)",
                "0 0 30px rgba(255, 105, 180, 0.5)",
                "0 0 20px rgba(128, 93, 238, 0.5)",
              ],
              background: [
                "linear-gradient(to right, #804dee, #ff6eb9)",
                "linear-gradient(to right, #ff6eb9, #804dee)",
                "linear-gradient(to right, #804dee, #ff6eb9)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <img
              src={saurav}
              alt="Saurav"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
