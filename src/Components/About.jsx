import React from "react";
import { motion } from "framer-motion";
import img from "../assets/aboutus.jpeg";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-12 py-10">
      <div className="md:w-1/2">
        <motion.h2
          className="text-4xl font-extrabold text-[#D90429] mb-4 cursor-default"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Why Choose Us
        </motion.h2>

        <motion.h3
          className="text-xl font-extrabold text-gray-600 mb-4 cursor-default"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Reliable, Affordable, and Quality Car Services
        </motion.h3>

        <motion.p
          className="font-semibold text-gray-600 mb-4 cursor-default"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          At <strong>CarFix Pro</strong>, we take pride in offering top-quality
          car services that ensure your vehicle stays in peak condition. Our
          experienced team is dedicated to providing exceptional service with a
          focus on customer satisfaction.
        </motion.p>

        <ul className="list-disc pl-6 text-gray-600 font-semibold mb-6">
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Expert Technicians with years of experience
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Affordable Pricing without compromising quality
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            High-Quality Parts & Materials
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Fast & Reliable Service to get you back on the road
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            100% Customer Satisfaction Guarantee
          </motion.li>
        </ul>

        <motion.button
          className="bg-[#D90429] text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Get a Free Quote
        </motion.button>
      </div>

      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={img}
          alt="Car Service"
          className="w-full max-w-xl rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
