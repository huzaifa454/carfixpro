import { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-scroll";
import logo from "../assets/logo2.jpg";
import HamburgerMenu from "react-hamburger-menu";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    CarType: "",
    budgetRange: "",
    message: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleToggle = () => setIsOpen(!isOpen);

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

  return (
    <>
      <div className="sticky top-0 z-30 text-[#D90429] bg-white flex justify-between items-center px-6 py-4 text-xl">
        <div className="flex items-center space-x-4 cursor-default">
          <div className="rounded-full overflow-hidden w-16 h-16">
            <img src={logo} alt="Logo" className="object-cover w-full h-full" />
          </div>
          <h1 className="text-xl font-serif font-extrabold">CarFix Pro </h1>
        </div>

        <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 gap-6 text-xl cursor-pointer font-semibold">
          <Link
            to="home"
            smooth
            duration={500}
            className="hover:font-extrabold"
          >
            Home
          </Link>
          <Link
            to="services"
            smooth
            duration={500}
            className="hover:font-extrabold"
          >
            Services
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            className="hover:font-extrabold"
          >
            About Us
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="hover:font-extrabold"
          >
            Contact Us
          </Link>
        </div>

        <div className="hidden sm:flex">
          <button
            onClick={openModal}
            className="cursor-pointer mt-6 text-white font-bold text-sm sm:text-base md:text-lg py-2 px-4 rounded-full hover:text-red-600 bg-black"
          >
            Request a Quote
          </button>
        </div>

        <div className="sm:hidden z-40">
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleToggle}
            width={24}
            height={18}
            strokeWidth={2}
            color="red"
            animationDuration={0.5}
          />
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-black text-white shadow-lg transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-start p-6">
            <button
              className="self-end mb-4 text-lg"
              onClick={() => setIsOpen(false)}
            >
              ✖ Close
            </button>
            <Link
              to="home"
              smooth
              duration={500}
              className="py-2 text-lg hover:text-purple-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="services"
              smooth
              duration={500}
              className="py-2 text-lg hover:text-purple-500"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="about"
              smooth
              duration={500}
              className="py-2 text-lg hover:text-purple-500"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="py-2 text-lg hover:text-purple-500"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-900 bg-opacity-90 p-6 rounded-lg w-11/12 sm:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-white text-center font-serif cursor-default">
                Request a Free Quote
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email"
                  className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  name="CarType"
                  value={formData.CarType}
                  onChange={handleChange}
                  placeholder="CarType"
                  className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  placeholder="budgetRange"
                  className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional Info"
                  className="mb-4 p-3 w-full border border-gray-600 rounded-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gradient-to-r from-red-600 to-red-900 text-white font-bold py-2 px-6 rounded-full text-lg transition-all duration-300"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-red-600 to-red-900 text-white font-bold py-2 px-6 rounded-full text-lg transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className="bg-black sticky top-[70px] z-40 text-white hidden sm:flex px-6 md:px-32 py-3 items-center justify-between text-center">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-red-500" />
          <p>033-567-8901</p>
        </div>

        <div className="flex items-center gap-2">
          <FaEnvelope className="text-red-500" />
          <p>carfixpro@gmail.com</p>
        </div>

        <div className="flex items-center gap-2">
          <FaClock className="text-red-500" />
          <p>Open: 8 AM - 6 PM</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
