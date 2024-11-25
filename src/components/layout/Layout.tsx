// src/components/layout/Layout.tsx

import React from 'react';
import { Phone, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="overflow-y-scroll scrollbar-gutter-stable">
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="w-24 md:w-32">
                <Link to="/">
                  <img 
                    src="https://www.ocpgroup.ma/themes/custom/ocp_child/img/logo.svg" 
                    alt="OCP Logo" 
                    className="h-10 md:h-12"
                  />
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <a href="tel:+6621234567" className="hover:text-ocp">
                  +66 2 123 4567
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/OCPGroupINT" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-ocp"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/ocpgroup/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-ocp"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <nav className="flex space-x-4 md:space-x-6">
                <Link to="/about-us" className="text-gray-600 hover:text-ocp">About Us</Link>
                <Link to="/contact-us" className="text-gray-600 hover:text-ocp">Contact Us</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-gray-600 text-sm">
            © 2024 OCP Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default Layout;
