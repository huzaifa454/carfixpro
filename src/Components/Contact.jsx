import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
         <motion.h2
          className="text-4xl font-extrabold text-center text-[#D90429] mb-6 cursor-default"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Contact Us
        </motion.h2>
      <p className="text-center text-gray-600 mb-6">
        Feel free to reach out to us for any inquiries or assistance.
      </p>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <FaPhone className="text-red-600" />
          <span className="text-gray-700">033-567-8901</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-red-600" />
          <span className="text-gray-700">carfixpro@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-red-600" />
          <span className="text-gray-700">Karachi Pakistan</span>
        </div>
      </div>
      <form className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
        ></textarea>
        <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
