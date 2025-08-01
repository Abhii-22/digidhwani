import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/Logos/Medini_logo.png";

function Footer() {
  const location = useLocation();
  const isTechVritti = location.pathname === "/techvritti";

  const scrollToServices = (e) => {
    e.preventDefault()
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  
  // Define social media links based on the current path
  const socialLinks = isTechVritti 
    ? [
        {
          platform: "facebook",
          url: "https://www.facebook.com/profile.php?id=61567620676135",
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/company/techvritti/",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/techvritti/",
        },
      ]
    : [
        {
          platform: "facebook",
          url: "https://www.facebook.com/share/18jahKMGDK/",
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/company/medinitechnologies/",
        },
        {
          platform: "instagram",
          url: "https://www.instagram.com/medinitechnologies?igsh=dXRxc3I4anl2NTlw",
        },
      ];

  return (
    <footer className="bg-white px-8 border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Services List Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              DigiDhvani Services
            </h3>
            <ul className="space-y-3">
              <li>
                <button onClick={scrollToServices} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm">
                  Search Engine Optimization
                </button>
              </li>
              <li>
                <button onClick={scrollToServices} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm">
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button onClick={scrollToServices} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm">
                  Content Marketing
                </button>
              </li>
              <li>
                <button onClick={scrollToServices} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm">
                  Pay Per Click Advertising
                </button>
              </li>
              <li>
                <button onClick={scrollToServices} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm">
                  Analytics and Reporting
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-4">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact', path: '/contact' },
              ].map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter and Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Stay Connected</h3>
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-customBlue text-white px-4 py-2 text-sm rounded-r-md hover:bg-blue-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
            
            {/* Social Media Icons */}
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ platform, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-customBlue transition-colors"
                    aria-label={platform}
                  >
                    <SocialIcon platform={platform} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {isTechVritti ? "TechVritti" : "Medini Technologies"}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({ platform }) => {
  switch (platform) {
    case "facebook":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default Footer;
