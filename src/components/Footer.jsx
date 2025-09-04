import React from "react";
import { Twitter, Facebook, Linkedin ,Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-lg font-semibold text-gray-800">
              Property Insights
            </span>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            The future of real estate analytics.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-gray-800">Company</h4>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-gray-800">Resources</h4>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-gray-800">Legal</h4>
          <ul className="mt-4 space-y-2 text-gray-600 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <p>© 2025 Property Insights. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0  mr-35">
          <a href="#"><Twitter className="w-5 h-5 text-gray-500 hover:text-blue-500" /></a>
          <a href="#"><Facebook className="w-5 h-5 text-gray-500 hover:text-blue-500" /></a>
          <a href="#"><Linkedin className="w-5 h-5 text-gray-500 hover:text-blue-500" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
