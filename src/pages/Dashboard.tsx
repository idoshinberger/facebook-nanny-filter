
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Facebook, MessageCircle, Clock, CheckCircle, User } from 'lucide-react';

// Mock data for search history
const searchHistory = [
  { id: '1', date: '2023-08-15', criteria: 'גיל: 25-35, אזור: תל אביב, ניסיון: 2+ שנים', results: 8 },
  { id: '2', date: '2023-08-10', criteria: 'גיל: 20-40, אזור: הרצליה, ניסיון: 1+ שנים', results: 5 },
  { id: '3', date: '2023-08-05', criteria: 'גיל: 30-45, אזור: רמת גן, ניסיון: 3+ שנים', results: 3 },
];

// Mock data for contacted babysitters
const contactedBabysitters = [
  { 
    id: '1', 
    name: 'מיכל לוי', 
    date: '2023-08-14', 
    status: 'responded', 
    message: 'היי, אשמח לשמוע יותר פרטים על הטיפול בילדה שלך. אני פנויה בימים שציינת.',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjBzbWlsaW5nfGVufDB8fDB8fHww',
  },
  { 
    id: '2', 
    name: 'שירה כהן', 
    date: '2023-08-12', 
    status: 'contacted', 
    message: 'הודעה נשלחה, מחכה לתשובה...',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTIwc21pbGluZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
  { 
    id: '3', 
    name: 'נועה גולדברג', 
    date: '2023-08-10', 
    status: 'hired', 
    message: 'הבייביסיטר אושרה והוזמנה לתאריכים: 20/08/2023, 22/08/2023, 24/08/2023',
    image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFuJTIwc21pbGluZ3xlbnwwfHwwfHx8MA%3D%3D',
  },
];

// Mock data for saved search templates
const searchTemplates = [
  { id: '1', name: 'חיפוש סטנדרטי', criteria: 'גיל: 25-35, אזור: תל אביב, ניסיון: 2+ שנים' },
  { id: '2', name: 'סופי שבוע', criteria: 'גיל: 20-40, אזור: כל האזורים, ניסיון: 1+ שנים, זמינות: סופי שבוע' },
];

const Dashboard = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'contacted':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">נשלחה הודעה</Badge>;
      case 'responded':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">התקבלה תשובה</Badge>;
      case 'hired':
        return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">נשכרה</Badge>;
      default:
        return <Badge variant="outline">לא ידוע</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-grow bg-slate-50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800">לוח הבקרה שלי</h1>
            <Button asChild>
              <Link to="/search">חיפוש חדש</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">חיפושים אחרונים</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{searchHistory.length}</div>
                <CardDescription>חיפושים בוצעו בסך הכל</CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">מטפלות שאותרו</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{contactedBabysitters.length}</div>
                <CardDescription>מטפלות פוטנציאליות נמצאו</CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">סטטוס ההתקשרות</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="flex items-center space-x-2 space-x-reverse mb-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">1 מטפלת נשכרה</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse mb-1">
                  <MessageCircle className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">1 מטפלת הגיבה להודעה</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Clock className="h-4 w-4 text-orange-500" />
                  <span className="text-sm">1 מטפלת ממתינה לתגובה</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="babysitters" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="babysitters">מטפלות</TabsTrigger>
              <TabsTrigger value="search-history">היסטוריית חיפושים</TabsTrigger>
              <TabsTrigger value="templates">תבניות חיפוש</TabsTrigger>
            </TabsList>
            
            <TabsContent value="babysitters">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b border-slate-100">
                  <h3 className="font-medium">מטפלות שנמצאו</h3>
                </div>
                <div>
                  {contactedBabysitters.map((sitter) => (
                    <div key={sitter.id} className="p-4 border-b border-slate-100 last:border-0">
                      <div className="flex items-start space-x-4 space-x-reverse">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <img src={sitter.image} alt={sitter.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium">{sitter.name}</h4>
                            {getStatusBadge(sitter.status)}
                          </div>
                          <p className="text-sm text-slate-500 mb-1">
                            <time dateTime={sitter.date}>{new Date(sitter.date).toLocaleDateString('he-IL')}</time>
                          </p>
                          <p className="text-sm text-slate-600">{sitter.message}</p>
                          
                          <div className="mt-3 flex space-x-2 space-x-reverse">
                            <Button size="sm" variant="outline" asChild>
                              <a href={`/profile/${sitter.id}`}>צפייה בפרופיל</a>
                            </Button>
                            {sitter.status === 'responded' && (
                              <Button size="sm">קביעת פגישה</Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="search-history">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b border-slate-100">
                  <h3 className="font-medium">היסטוריית חיפושים</h3>
                </div>
                <div>
                  {searchHistory.map((search) => (
                    <div key={search.id} className="p-4 border-b border-slate-100 last:border-0">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-medium">חיפוש מתאריך {new Date(search.date).toLocaleDateString('he-IL')}</h4>
                        <span className="text-sm text-slate-500">{search.results} תוצאות</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{search.criteria}</p>
                      <Button size="sm" variant="outline">הפעלת חיפוש מחדש</Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="templates">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b border-slate-100">
                  <h3 className="font-medium">תבניות חיפוש שמורות</h3>
                </div>
                <div>
                  {searchTemplates.map((template) => (
                    <div key={template.id} className="p-4 border-b border-slate-100 last:border-0">
                      <div className="mb-1">
                        <h4 className="font-medium">{template.name}</h4>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{template.criteria}</p>
                      <div className="flex space-x-2 space-x-reverse">
                        <Button size="sm">הפעלת חיפוש</Button>
                        <Button size="sm" variant="outline">עריכה</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Facebook className="h-5 w-5 text-blue-600" />
                חיבור לפייסבוק
              </CardTitle>
              <CardDescription>
                סטטוס החיבור לחשבון הפייסבוק שלך
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <User className="h-5 w-5 text-slate-500" />
                  </div>
                  <div>
                    <p className="font-medium">לא מחובר</p>
                    <p className="text-sm text-slate-500">יש להתחבר לפייסבוק כדי להשתמש באפליקציה</p>
                  </div>
                </div>
                <Button className="flex items-center gap-2" onClick={() => window.location.href = '/api/auth/facebook'}>
                  <Facebook size={16} />
                  <span>התחברות עם פייסבוק</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
