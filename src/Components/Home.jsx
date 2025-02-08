import React, { useState } from "react";
import main from "../assets/main.png";
import { Link } from "react-scroll";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ModalForm = ({ isModalOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    CarType: "",
    budgetRange: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_KEY;
    const templateId = import.meta.env.VITE_TEMPLATE_KEY;
    const userId = import.meta.env.VITE_PUBLIC_KEY;

    if (
      !formData.name ||
      !formData.email ||
      !formData.CarType ||
      !formData.budgetRange ||
      !formData.message
    ) {
      alert("Please fill all the fields!");
      return;
    }

    emailjs.send(serviceId, templateId, formData, userId).then(
      (result) => {
        alert("Email sent successfully!");
        console.log("Email sent:", result.text);
        setFormData({
          name: "",
          email: "",
          CarType: "",
          budgetRange: "",
          message: "",
        });
        closeModal();
      },
      (error) => {
        alert("Failed to send email. Please try again.");
        console.error("Email error:", error.text);
      }
    );
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg w-11/12 sm:w-1/2 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center font-serif">
          Request a Free Quote
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="mb-4 p-3 w-full border border-gray-600 rounded-md bg-gray-800 focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-4 p-3 w-full border border-gray-600 rounded-md bg-gray-800 focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name="CarType"
            value={formData.CarType}
            onChange={handleChange}
            placeholder="Car Type"
            className="mb-4 p-3 w-full border border-gray-600 rounded-md bg-gray-800 focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            placeholder="Budget Range"
            className="mb-4 p-3 w-full border border-gray-600 rounded-md bg-gray-800 focus:ring-2 focus:ring-red-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Info"
            className="mb-4 p-3 w-full border border-gray-600 rounded-md bg-gray-800 focus:ring-2 focus:ring-red-500"
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={closeModal}
              className="bg-red-600 text-white font-bold py-2 px-6 rounded-full"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-red-600 text-white font-bold py-2 px-6 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="flex justify-start min-h-screen px-6 md:px-12 py-16 text-left cursor-default"
      style={{
        backgroundImage: `url(${main})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-2xl text-black">
        <motion.h1
          className="font-extrabold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <span className="text-6xl sm:text-7xl md:text-8xl text-[#D90429]">
            Your
          </span>
          <span className="text-4xl sm:text-6xl md:text-7xl"> Car </span>
          <br />
          <span className="text-4xl sm:text-5xl md:text-6xl">Our </span>{" "}
          <span className="text-6xl sm:text-7xl md:text-8xl text-[#D90429]">
            Car<span className="text-black">e</span>
          </span>
        </motion.h1>
        <motion.p
          className="py-6 text-lg sm:text-xl md:text-2xl text-gray-600"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Premium car services you can trust. Drive with confidence!
        </motion.p>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="cursor-pointer mt-6 text-white font-bold text-sm sm:text-base md:text-lg py-2 px-4 rounded-full hover:text-red-600 bg-black"
        >
          Learn More
        </Link>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex md:hidden cursor-pointer mt-6 text-white font-bold text-sm sm:text-base md:text-lg py-2 px-4 rounded-full hover:text-red-600 bg-black"
        >
          Request a Quote
        </button>
      </div>
      <ModalForm
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;
