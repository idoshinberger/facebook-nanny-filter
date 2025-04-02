
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleFacebookLogin = () => {
    toast({
      title: "Facebook Login",
      description: "מתחבר לפייסבוק...",
    });
    // In a real implementation, this would initiate the OAuth flow
    // For demo purposes, we'll just simulate a login and navigate to dashboard
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-slate-50 py-16">
        <div className="container mx-auto px-4 max-w-md">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">התחברות לחשבון</CardTitle>
              <CardDescription>
                התחברו כדי למצוא בייביסיטר דרך רשת החברים בפייסבוק
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-700">
                <p className="font-medium mb-1">ככה זה עובד:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>ההתחברות מאפשרת לנו לסרוק את רשימת החברים והקבוצות שלכם</li>
                  <li>אנחנו מחפשים רק פרופילים שמציעים שירותי בייביסיטר</li>
                  <li>כל הנתונים שלכם מאובטחים ואנו לא שומרים את הסיסמה שלכם</li>
                </ul>
              </div>
              
              <Button 
                onClick={handleFacebookLogin}
                className="w-full h-12 gap-2 text-base"
              >
                <Facebook size={20} />
                התחברות עם פייסבוק
              </Button>
            </CardContent>
            <CardFooter className="flex justify-center text-center text-sm text-slate-500">
              בלחיצה על "התחברות עם פייסבוק" אתם מסכימים ל
              <a href="#" className="text-primary mx-1">תנאי השימוש</a>
              ו
              <a href="#" className="text-primary mr-1">מדיניות הפרטיות</a>
              שלנו
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
