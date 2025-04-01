
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Facebook, Search } from "lucide-react";

interface FilterProps {
  onApplyFilters: (filters: any) => void;
}

const SearchFilters = ({ onApplyFilters }: FilterProps) => {
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState(0);
  const [hourlyRate, setHourlyRate] = useState([30, 100]);
  const [age, setAge] = useState("");
  const [facebookFilter, setFacebookFilter] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const availableSkills = [
    "טיפול בתינוקות",
    "החלפת חיתולים",
    "הכנת אוכל",
    "עזרה בשיעורי בית",
    "הסעות",
    "עזרה בית ספר",
    "פעילויות יצירה",
  ];

  const handleSkillToggle = (skill: string) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      location,
      experience,
      hourlyRate,
      age: age ? parseInt(age) : null,
      facebookFilter,
      skills,
    });
  };

  const handleResetFilters = () => {
    setLocation("");
    setExperience(0);
    setHourlyRate([30, 100]);
    setAge("");
    setFacebookFilter(false);
    setSkills([]);
    onApplyFilters({});
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-medium mb-4">סינון מטפלות</h3>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="location">מיקום</Label>
          <div className="relative">
            <Input
              id="location"
              type="text"
              placeholder="הזן עיר או אזור"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pr-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="experience">ניסיון מינימלי (בשנים)</Label>
          <Select value={String(experience)} onValueChange={(value) => setExperience(Number(value))}>
            <SelectTrigger id="experience">
              <SelectValue placeholder="כל ניסיון" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">כל ניסיון</SelectItem>
              <SelectItem value="1">שנה ומעלה</SelectItem>
              <SelectItem value="2">שנתיים ומעלה</SelectItem>
              <SelectItem value="3">3 שנים ומעלה</SelectItem>
              <SelectItem value="5">5 שנים ומעלה</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="hourlyRate">טווח תעריף שעתי</Label>
            <span className="text-sm text-gray-500">
              {hourlyRate[0]}₪ - {hourlyRate[1]}₪
            </span>
          </div>
          <Slider
            id="hourlyRate"
            min={20}
            max={200}
            step={5}
            value={hourlyRate}
            onValueChange={setHourlyRate}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="age">גיל</Label>
          <Select value={age} onValueChange={setAge}>
            <SelectTrigger id="age">
              <SelectValue placeholder="כל הגילאים" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">כל הגילאים</SelectItem>
              <SelectItem value="18">18-25</SelectItem>
              <SelectItem value="25">25-35</SelectItem>
              <SelectItem value="35">35-45</SelectItem>
              <SelectItem value="45">45+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label className="text-base">כישורים</Label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {availableSkills.map((skill) => (
              <div key={skill} className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id={`skill-${skill}`}
                  checked={skills.includes(skill)}
                  onCheckedChange={() => handleSkillToggle(skill)}
                />
                <Label htmlFor={`skill-${skill}`} className="text-sm font-normal cursor-pointer">
                  {skill}
                </Label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-2 space-x-reverse">
          <Checkbox
            id="facebook-filter"
            checked={facebookFilter}
            onCheckedChange={() => setFacebookFilter(!facebookFilter)}
          />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="facebook-filter" className="text-sm font-normal cursor-pointer flex items-center">
              <Facebook size={16} className="ml-1 text-facebook" />
              רק חברות של חברים
            </Label>
          </div>
        </div>
        
        <div className="flex space-x-2 space-x-reverse pt-2">
          <Button onClick={handleApplyFilters} className="flex-1">
            החל סינון
          </Button>
          <Button variant="outline" onClick={handleResetFilters}>
            איפוס
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
