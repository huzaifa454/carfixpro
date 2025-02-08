import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
        
          <div>
            <h1 className="text-2xl font-semibold text-red-600">CarFix Pro</h1>
            <p className="mt-2 text-sm">Your Trusted Partner in Reliable Car Care.</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-500" />
                <a href="mailto:Info@ductscareflorida.com" className="text-sm hover:text-blue-500">
                  carfixpro@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-green-500" />
                <p className="text-sm">Karachi Pakistan</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-red-600" />
                <a href="tel:+11234567890" className="text-sm hover:text-[#ff4848]">
                  813-813-7657
                </a>
              </div>
            </div>
          </div>

       
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Business Hours</h2>
            <ul className="text-sm space-y-1">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

    
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-sm mb-4">Stay Updated with Exclusive Car Service Offers & Expert Tips.</p>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-sm text-gray-900 bg-gray-100 rounded focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        
          <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth
                duration={500}
                className="text-sm text-white hover:text-[#ff4848] cursor-pointer"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

      
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md group transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-blue-700 group-hover:scale-110 transition-all duration-300" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md group transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-blue-500 group-hover:scale-110 transition-all duration-300" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md group transition-all duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-pink-600 group-hover:scale-110 transition-all duration-300" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md group transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-blue-800 group-hover:scale-110 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
