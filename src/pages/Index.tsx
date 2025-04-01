
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import NannyCard from '@/components/NannyCard';
import { Button } from '@/components/ui/button';

// Mock data for nannies
const featuredNannies = [
  {
    id: '1',
    name: 'מיכל לוי',
    age: 28,
    location: 'תל אביב',
    experience: 5,
    rating: 4.9,
    hourlyRate: 60,
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjBzbWlsaW5nfGVufDB8fDB8fHww',
    facebookConnections: 3,
    skills: ['טיפול בתינוקות', 'עזרה בשיעורי בית', 'הכנת אוכל'],
    verified: true,
  },
  {
    id: '2',
    name: 'שירה כהן',
    age: 24,
    location: 'הרצליה',
    experience: 3,
    rating: 4.7,
    hourlyRate: 55,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTIwc21pbGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    facebookConnections: 5,
    skills: ['טיפול בתינוקות', 'החלפת חיתולים', 'הסעות'],
    verified: true,
  },
  {
    id: '3',
    name: 'נועה גולדברג',
    age: 32,
    location: 'רמת גן',
    experience: 7,
    rating: 4.8,
    hourlyRate: 65,
    image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFuJTIwc21pbGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    facebookConnections: 2,
    skills: ['טיפול בתינוקות', 'עזרה בית ספר', 'פעילויות יצירה'],
    verified: false,
  },
];

const Index = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
  const testimonials = [
    {
      text: "המטפלת שמצאנו דרך NannyLink היא מדהימה! העובדה שהיא הייתה חברה של חברה שלי בפייסבוק נתנה לי תחושת ביטחון מיידית. הילדים שלי פשוט מתים עליה.",
      author: "מיכל ש.",
      role: "אמא ל-2, תל אביב"
    },
    {
      text: "כהורים טריים, היינו לחוצים מאוד למצוא מישהי אמינה. המערכת של NannyLink אפשרה לנו למצוא בייביסיטר שכמה מהחברים שלנו כבר עבדו איתה. זה היה מרגיע מאוד!",
      author: "יובל ונועה ל.",
      role: "הורים לתינוק, ראשון לציון"
    },
    {
      text: "אחרי מספר ניסיונות כושלים עם מטפלות, NannyLink עזרה לנו למצוא את רונית המדהימה! היא הייתה חברה של חברה בפייסבוק, וזה באמת עשה את כל ההבדל.",
      author: "דני כ.",
      role: "אבא ל-3, ירושלים"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <FeaturesSection />
        
        {/* Featured Nannies Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">מטפלות מומלצות</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                הנה כמה מהמטפלות המובילות שלנו עם חיבורים לרשת החברים שלכם
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredNannies.map((nanny) => (
                <NannyCard key={nanny.id} {...nanny} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <a href="/nannies">צפייה בכל המטפלות</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">מה אומרים עלינו</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                הורים רבים כבר מצאו את המטפלת המושלמת דרך NannyLink
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto relative">
              <div className="bg-blue-50 rounded-2xl p-8 shadow-sm">
                <svg className="w-16 h-16 text-blue-200 absolute top-6 right-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9992 22C17.5221 22 22 17.5228 22 12C22 6.47715 17.5221 2 11.9992 2C6.47797 2 2 6.47715 2 12C2 17.5228 6.47797 22 11.9992 22Z" fillOpacity="0.2"/>
                  <path d="M8.39844 11.0977C8.39844 8.96484 9.96875 7.14062 12.0508 7.14062C12.4336 7.14062 12.7344 7.43164 12.7344 7.8125C12.7344 8.19336 12.4336 8.48438 12.0508 8.48438C10.8125 8.48438 9.74219 9.63672 9.74219 11.0977V11.8945C9.74219 12.2754 9.44336 12.5664 9.06055 12.5664C8.67969 12.5664 8.39844 12.2754 8.39844 11.8945V11.0977ZM14.9922 11.0977C14.9922 8.96484 16.5625 7.14062 18.6445 7.14062C19.0273 7.14062 19.3281 7.43164 19.3281 7.8125C19.3281 8.19336 19.0273 8.48438 18.6445 8.48438C17.4062 8.48438 16.3359 9.63672 16.3359 11.0977V11.8945C16.3359 12.2754 16.0371 12.5664 15.6543 12.5664C15.2734 12.5664 14.9922 12.2754 14.9922 11.8945V11.0977Z"/>
                </svg>
                
                <div className="relative z-10">
                  <p className="text-xl text-slate-700 italic mb-6">
                    {testimonials[testimonialIndex].text}
                  </p>
                  <div>
                    <p className="font-semibold text-slate-800">{testimonials[testimonialIndex].author}</p>
                    <p className="text-slate-500">{testimonials[testimonialIndex].role}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === testimonialIndex ? 'bg-primary' : 'bg-slate-300'
                    }`}
                    aria-label={`View testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">מוכנים למצוא את המטפלת המושלמת?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              התחברו עכשיו וגלו מטפלות מומלצות שכבר מחוברות לחברים שלכם בפייסבוק
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-slate-100">
              התחילו עכשיו
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
