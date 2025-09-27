

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <footer
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
                   gap-8 py-10 px-6"
      >
        {/* Company Info */}
        <div>
          <h1 className="text-lg font-semibold">CS — Ticket System</h1>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            labor accusantium cum asperiores at libero nemo cumque similique
            provident quis iure quod hic?
          </p>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-semibold">Company</h2>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-semibold">Services</h2>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h2 className="font-semibold">Information</h2>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="font-semibold">Social Links</h2>
          <div className="mt-4 space-y-3 text-sm">
            {/* Facebook */}
            <div className="flex items-center gap-2">
              <div className="bg-white text-black w-7 h-7 flex items-center justify-center rounded-md">
                <FaFacebookF size={14} />
              </div>
              <span className="text-gray-400">support@cst.com</span>
            </div>

            {/* X / Cancel (example icon from your code) */}
            <div className="flex items-center gap-2">
              <div className="bg-white text-black w-7 h-7 flex items-center justify-center rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <span className="text-gray-400">@CS — Ticket System</span>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-2">
              <div className="bg-white text-black w-7 h-7 flex items-center justify-center rounded-md">
                <FaLinkedinIn size={14} />
              </div>
              <span className="text-gray-400">@CS — Ticket System</span>
            </div>

            {/* Calendar Icon Example */}
            <div className="flex items-center gap-2">
              <div className="bg-white text-black w-7 h-7 flex items-center justify-center rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 2.994v2.25m10.5-2.25v2.25M4.5 20.744V7.491a2.25 2.25 0 012.25-2.25h10.5a2.25 2.25 0 012.25 2.25v13.253m-15 0a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25"
                  />
                </svg>
              </div>
              <span className="text-gray-400">@CS — Ticket System</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <p className="text-sm text-center py-4 border-t border-gray-700 text-gray-400">
        © 2025 <span className="font-semibold">Customer Support Zone</span>. All
        rights reserved.
      </p>
    </div>
  );
}

