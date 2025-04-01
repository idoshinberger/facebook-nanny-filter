
import { CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">איך NannyLink עובד?</h2>
          <p className="text-lg text-slate-600">
            בעזרת NannyLink תוכלו למצוא מטפלות ובייביסיטריות מומלצות ומוכחות
            דרך רשת החברים שלכם בפייסבוק
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-8 text-center transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">התחברות לפייסבוק</h3>
            <p className="text-slate-600 mb-4">
              התחברו בקלות דרך חשבון הפייסבוק שלכם, ואנחנו נביא לכם את רשת החברים שלכם
            </p>
            <ul className="text-right space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                <span className="text-sm">התחברות מאובטחת</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                <span className="text-sm">גישה לרשת החברים</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                <span className="text-sm">פרטיות מובטחת</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 text-center transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">חיפוש וסינון</h3>
            <p className="text-slate-600 mb-4">
              סננו מטפלות לפי חברים משותפים, ניסיון, מיקום, כישורים, והמלצות
            </p>
            <ul className="text-right space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                <span className="text-sm">סינון לפי חברים משותפים</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                <span className="text-sm">סינון לפי מיקום וניסיון</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                <span className="text-sm">צפייה בהמלצות אמיתיות</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 text-center transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">תיאום פגישה</h3>
            <p className="text-slate-600 mb-4">
              צרו קשר ישירות עם המטפלות המועדפות עליכם ותאמו פגישה בקלות
            </p>
            <ul className="text-right space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                <span className="text-sm">תיאום קל ונוח</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                <span className="text-sm">שיחה דרך המערכת</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                <span className="text-sm">תמיכה בכל שלב</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
