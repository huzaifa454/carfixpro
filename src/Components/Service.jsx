import React from "react";
import carservice from "../assets/carservice.jpg";
import Brake from "../assets/Brake.jpg";
import Tire from "../assets/Tire.jpg";
import sus from "../assets/Suspension.jpg";
import Battery from "../assets/Battery.jpg";
import Air from "../assets/Air.jpg";
import Engine from "../assets/Engine.jpg";
import Detailing from "../assets/Detailing.jpg";
import Alignment from "../assets/Alignment.jpg";
import { motion } from "framer-motion";

const services = [
  {
    image: carservice,
    title: "Car Servicing & Maintenance",
    description:
      "Regular check-ups, oil changes, and tune-ups to keep your car performing at its best.",
  },
  {
    image: Brake,
    title: "Brake Repair & Replacement",
    description:
      "Ensuring your braking system is in top condition for maximum safety.",
  },
  {
    image: Tire,
    title: "Tire Sales & Installation",
    description:
      "A wide range of quality tires and professional installation for a smooth ride.",
  },
  {
    image: sus,
    title: "Suspension & Steering Repair",
    description:
      "Fixing issues related to shocks, struts, and steering for a comfortable drive.",
  },
  {
    image: Battery,
    title: "Battery Replacement & Diagnostics",
    description:
      "Testing and replacing car batteries to prevent unexpected breakdowns.",
  },
  {
    image: Air,
    title: "Air Conditioning & Heating Services",
    description:
      "Keeping your car’s climate control system efficient in all seasons.",
  },
  {
    image: Engine,
    title: "Engine & Transmission Repair",
    description:
      "Expert solutions for engine performance and transmission issues.",
  },
  {
    image: Detailing,
    title: "Car Detailing & Polishing",
    description:
      "Professional cleaning, polishing, and waxing to make your car look brand new.",
  },
  {
    image: Alignment,
    title: "Wheel Alignment & Balancing",
    description:
      "Precision alignment services for better handling, fuel efficiency, and tire longevity.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-center text-[#D90429] mb-6 cursor-default"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Our Services
        </motion.h2>

        <div className="overflow-visible">
          <p className="text-lg text-gray-600 sm:text-xl md:text-2xl lg:text-3xl text-center max-w-[90%] mx-auto">
            Quality car care, from tires to brakes—fast, reliable, and
            professional!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg text-center transition duration-300 hover:shadow-[0_6px_14px_rgba(217,4,41,0.7)]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
