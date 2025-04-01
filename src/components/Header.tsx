
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">NannyLink</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              בית
            </Link>
            <Link to="/nannies" className="text-gray-600 hover:text-primary transition-colors">
              חיפוש מטפלות
            </Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-primary transition-colors">
              איך זה עובד
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
              אודות
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              התחברות
            </Button>
            <Button className="flex items-center gap-2" size="sm">
              <Facebook size={16} />
              <span>התחברות עם פייסבוק</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md focus:outline-none" 
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                בית
              </Link>
              <Link 
                to="/nannies" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                חיפוש מטפלות
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                איך זה עובד
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                אודות
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" className="justify-center">
                  התחברות
                </Button>
                <Button className="flex items-center justify-center gap-2" size="sm">
                  <Facebook size={16} />
                  <span>התחברות עם פייסבוק</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
