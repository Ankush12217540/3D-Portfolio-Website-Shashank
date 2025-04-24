import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// Importing images directly using the correct path
import stanfordImage from '../assets/stanford.png';  // Relative import for stanford image
import microsoftImage from '../assets/microsoft.png';  // Relative import for microsoft image

// Example certificates array with image paths
const certificates = [
  {
    title: "Data structure and Algorithm",
    issuer: "Coursera / Stanford University",
    date: "Nov 30, 2023",
    demoLink: "https://www.coursera.org/account/accomplishments/verify/85MFRZKHJSNJ",
    image: stanfordImage, // Image for this certificate
  },
  {
    title: "Microsoft Certified",
    issuer: "Microsoft / Azure Administrator Associate",
    date: " 23 April 2025",
    demoLink: "https://learn.microsoft.com/en-in/users/shashankkumar-3368/credentials/4614d9c0b52d3220",
    image: microsoftImage, // Image for this certificate
  },
];

const CertificateCard = ({ title, issuer, date, demoLink, image, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-tertiary p-10 rounded-2xl shadow-xl w-full lg:w-[45%] flex flex-col justify-between"
  >
    <div className="relative w-full h-[250px] rounded-xl bg-gray-100">
      {/* Displaying certificate image */}
      <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
    </div>

    <div className="mt-6">
      <h3 className="text-white font-bold text-xl">{title}</h3>
      <p className="text-secondary text-[14px] mt-2">{issuer}</p>
      <p className="text-secondary text-[12px] mt-1">{date}</p>
    </div>

    <div className="mt-4">
      {/* Demo Link */}
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-[14px] underline hover:text-blue-700"
      >
        View Certificate
      </a>
    </div>
  </motion.div>
);

const Certificate = () => {
  return (
    <div id="certificate" className="pt-16 pb-16 bg-primary"> {/* Section with padding and background */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recognition</p>
        <h2 className={styles.sectionHeadText}>Certificates</h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap justify-between gap-12">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificate, "certificate");
