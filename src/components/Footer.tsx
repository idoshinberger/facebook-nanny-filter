
import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Link to="/" className="text-xl font-bold text-primary">
                NannyLink
              </Link>
            </div>
            <p className="text-slate-600 mb-4">
              מצאו את המטפלת האידיאלית דרך החברים שלכם בפייסבוק. בטוח, אמין ופשוט.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-slate-600 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-slate-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-slate-800 font-medium mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-600 hover:text-primary">דף הבית</Link>
              </li>
              <li>
                <Link to="/nannies" className="text-slate-600 hover:text-primary">חיפוש מטפלות</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-slate-600 hover:text-primary">איך זה עובד</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-primary">אודות</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-slate-800 font-medium mb-4">אזורים פופולריים</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-600 hover:text-primary">תל אביב</a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary">ירושלים</a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary">חיפה</a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary">ראשון לציון</a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary">הרצליה</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-slate-800 font-medium mb-4">משאבים</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-600 hover:text-primary">מדריך למציאת בייביסיטר</a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary">בלוג</a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary">שאלות נפוצות</a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-primary">יצירת קשר</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-slate-200 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} NannyLink - כל הזכויות שמורות
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 text-sm hover:text-primary">
              תנאי שימוש
            </a>
            <a href="#" className="text-slate-500 text-sm hover:text-primary">
              מדיניות פרטיות
            </a>
            <a href="#" className="text-slate-500 text-sm hover:text-primary">
              מדיניות עוגיות
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
