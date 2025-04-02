
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SearchFilters } from '@/components/SearchFilters';
import NannyCard from '@/components/NannyCard';
import { useState } from 'react';

// Mock data for nannies - this would be replaced with actual data from API
const mockNannies = [
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

const Search = () => {
  const [filteredNannies, setFilteredNannies] = useState(mockNannies);

  const handleFilterChange = (filters: any) => {
    console.log('Filters applied:', filters);
    // In a real app, this would filter the nannies based on the selected criteria
    // For now, we'll just return all nannies
    setFilteredNannies(mockNannies);
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-primary mb-2">חיפוש מטפלות</h1>
            <p className="text-slate-600 mb-8">
              מצאו את המטפלת המושלמת עם חיבורים לרשת החברים שלכם
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <SearchFilters onFilterChange={handleFilterChange} />
              </div>
              
              <div className="md:col-span-3">
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                  <p className="text-slate-600">נמצאו {filteredNannies.length} מטפלות העונות לדרישות שלכם</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNannies.map((nanny) => (
                    <NannyCard key={nanny.id} {...nanny} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
