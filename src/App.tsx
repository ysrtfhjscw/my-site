import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "@/pages/Home";
import CourseDetail from "@/pages/CourseDetail";
import About from "@/pages/About";
import { CoursesProvider } from "@/contexts/CoursesContext";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <CoursesProvider>
      <Router>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-xl font-bold text-blue-500">
                魏冉的个人页面
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-gray-700 hover:text-blue-500 transition-colors">
                  首页
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-500 transition-colors">
                  关于我
                </Link>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4">
                <Link 
                  to="/" 
                  className="block py-2 text-gray-700 hover:text-blue-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  首页
                </Link>
                <Link 
                  to="/about" 
                  className="block py-2 text-gray-700 hover:text-blue-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  关于我
                </Link>
              </div>
            )}
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </CoursesProvider>
  );
}
