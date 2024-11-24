import React from 'react';
import { Phone, Facebook } from 'lucide-react';

const LineIcon: React.FC = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="h-5 w-5"
    fill="currentColor"
  >
    <path d="M24 10.314C24 4.943 18.615.001 12 .001S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314zM19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.322v2.945c0 .346-.279.629-.631.629-.346 0-.626-.283-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.631-.63.345 0 .627.285.627.63v4.771h.002zm-5.791.016c0 .345-.282.63-.631.63-.345 0-.627-.285-.627-.63V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.63h-1.753v-4.77c0-.346-.283-.63-.631-.63-.345 0-.628.284-.628.63v4.77h-1.755c-.349 0-.63-.285-.63-.63V8.108c0-.345.281-.63.63-.63h4.767c.348 0 .629.285.629.63v4.771c0 .345-.282.63-.629.63z"/>
  </svg>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    {/* Header */}
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="w-32">
              <img 
                src="https://www.ocpgroup.ma/themes/custom/ocp_child/img/logo.svg" 
                alt="OCP Logo" 
                className="h-12"
              />
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+66 2 123 4567</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="bg-ocp text-white px-8 py-2.5 rounded-full hover:bg-ocp-dark transition-colors">
              Customize Now
            </button>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-600 hover:text-ocp cursor-pointer" />
              <div className="text-gray-600 hover:text-ocp cursor-pointer">
                <LineIcon />
              </div>
            </div>
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-ocp">Who we are</a>
              <a href="#" className="text-gray-600 hover:text-ocp">Contact Us</a>
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
);

export default Layout;