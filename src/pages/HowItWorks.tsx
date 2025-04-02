
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-grow">
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">איך זה עובד?</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              הכירו את הדרך החדשה והבטוחה למצוא בייביסיטר באמצעות רשת החברים שלכם בפייסבוק
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <div className="bg-blue-100 text-blue-800 inline-block rounded-full px-4 py-1 text-sm font-semibold mb-4">שלב 1</div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">התחברו עם פייסבוק</h2>
                <p className="text-lg text-slate-600 mb-6">
                  התחברו באמצעות חשבון הפייסבוק שלכם. זה בטוח לחלוטין - אנחנו רק מבקשים גישה לרשימת החברים והקבוצות שלכם כדי לחפש מטפלות פוטנציאליות.
                </p>
                <Button size="lg" className="mt-2" asChild>
                  <Link to="/login">התחברו עכשיו</Link>
                </Button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Facebook Login"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="order-1 md:order-2">
                <div className="bg-green-100 text-green-800 inline-block rounded-full px-4 py-1 text-sm font-semibold mb-4">שלב 2</div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">הגדירו את הקריטריונים לחיפוש</h2>
                <p className="text-lg text-slate-600 mb-6">
                  בחרו את הקריטריונים המדויקים שלכם: טווח גילאים, אזור מגורים, ניסיון, היקף משרה ועוד. המערכת תזכור את ההעדפות שלכם לחיפושים עתידיים.
                </p>
              </div>
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Search Criteria"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <div className="bg-purple-100 text-purple-800 inline-block rounded-full px-4 py-1 text-sm font-semibold mb-4">שלב 3</div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">אתרו מטפלות ברשת החברים שלכם</h2>
                <p className="text-lg text-slate-600 mb-6">
                  הבוט יסרוק את רשימת החברים והקבוצות שלכם בפייסבוק כדי למצוא מטפלות פוטנציאליות. רק פרופילים עם תמונת פרופיל ומעל 100 חברים יוצגו כדי להבטיח אמינות.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Finding Nannies"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-1 md:order-2">
                <div className="bg-amber-100 text-amber-800 inline-block rounded-full px-4 py-1 text-sm font-semibold mb-4">שלב 4</div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">צרו קשר אוטומטי וקבלו התראות</h2>
                <p className="text-lg text-slate-600 mb-6">
                  המערכת תשלח הודעה ראשונית מותאמת אישית למועמדות המתאימות. כאשר מטפלת מגיבה בחיוב, תקבלו התראה במייל כדי להמשיך את השיחה באופן אישי.
                </p>
                <Button size="lg" className="mt-2" asChild>
                  <Link to="/search">התחילו בחיפוש</Link>
                </Button>
              </div>
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Contact and Notifications"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">מוכנים להתחיל?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              עם NannyLink, מציאת בייביסיטר אמינה ומתאימה לילדים שלכם היא קלה ובטוחה יותר מאי פעם
            </p>
            <Button size="lg" asChild>
              <Link to="/login">התחברו והתחילו בחיפוש</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
