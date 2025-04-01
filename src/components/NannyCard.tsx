
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Star, Clock, MapPin, CheckCircle } from "lucide-react";

interface NannyCardProps {
  id: string;
  name: string;
  age: number;
  location: string;
  experience: number;
  rating: number;
  hourlyRate: number;
  image: string;
  facebookConnections: number;
  skills: string[];
  verified: boolean;
}

const NannyCard = ({
  id,
  name,
  age,
  location,
  experience,
  rating,
  hourlyRate,
  image,
  facebookConnections,
  skills,
  verified,
}: NannyCardProps) => {
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={`${name} - מטפלת`}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          {verified && (
            <div className="absolute top-2 left-2 bg-green-500 text-white p-1 rounded-full">
              <CheckCircle size={16} />
            </div>
          )}
          <div className="absolute bottom-2 left-2 bg-facebook text-white px-2 py-1 rounded-md flex items-center gap-1">
            <Facebook size={14} />
            <span className="text-xs font-medium">{facebookConnections} חברים משותפים</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg">{name}, {age}</CardTitle>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>
        <CardDescription className="text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1 mb-1">
            <MapPin size={14} className="text-gray-400" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-gray-400" />
            <span>{experience} שנות ניסיון</span>
          </div>
        </CardDescription>
        <div className="flex flex-wrap gap-1 mt-3">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 border-t">
        <span className="font-semibold">{hourlyRate}₪ לשעה</span>
        <Button size="sm">צפייה בפרופיל</Button>
      </CardFooter>
    </Card>
  );
};

export default NannyCard;
