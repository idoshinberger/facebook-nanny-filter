
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24">
      <div className="absolute right-0 bottom-0 opacity-10">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="300" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4F46E5" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 leading-tight">
            מצאו את המטפלת האידיאלית דרך החברים שלכם
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            מערכת חכמה שמסננת מטפלות ובייביסיטריות על פי המלצות וחיבורים של החברים שלכם בפייסבוק.
            ביטחון ואמון מעל הכל.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2" dir="ltr">
              <Facebook size={20} />
              <span>התחברו עם פייסבוק</span>
            </Button>
            <Button size="lg" variant="outline">
              גלו עוד
            </Button>
          </div>
          <div className="mt-14 flex flex-col md:flex-row justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2 justify-center">
              <div className="bg-green-100 text-green-700 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>למעלה מ-1,000 מטפלות</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div className="bg-green-100 text-green-700 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>פילטר חברים בפייסבוק</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div className="bg-green-100 text-green-700 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>אימות והמלצות</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
