export interface Trainer {
  id: string;
  name: string;
  photoUrl: string;
  expertise: string;
  experienceYears: number;
  regionsWorked: string[];
  featured: boolean;
  status: "Active" | "Upcoming" | "Past";
}

// Placeholder trainers – replace with real data later
export const trainers: Trainer[] = [
  {
    id: "1",
    name: "Trainer Profile 1",
    photoUrl: "",
    expertise: "Leadership & Strategy",
    experienceYears: 18,
    regionsWorked: ["Middle East", "Europe", "Africa"],
    featured: true,
    status: "Active",
  },
  {
    id: "2",
    name: "Trainer Profile 2",
    photoUrl: "",
    expertise: "Human Resource Management",
    experienceYears: 15,
    regionsWorked: ["Asia", "North America", "Europe"],
    featured: true,
    status: "Active",
  },
  {
    id: "3",
    name: "Trainer Profile 3",
    photoUrl: "",
    expertise: "Finance & Risk Management",
    experienceYears: 20,
    regionsWorked: ["Europe", "Middle East", "Asia"],
    featured: true,
    status: "Active",
  },
  {
    id: "4",
    name: "Trainer Profile 4",
    photoUrl: "",
    expertise: "Technology & Digital Transformation",
    experienceYears: 12,
    regionsWorked: ["North America", "Europe"],
    featured: false,
    status: "Active",
  },
  {
    id: "5",
    name: "Trainer Profile 5",
    photoUrl: "",
    expertise: "Supply Chain & Operations",
    experienceYears: 16,
    regionsWorked: ["Africa", "Middle East", "Asia"],
    featured: false,
    status: "Active",
  },
  {
    id: "6",
    name: "Trainer Profile 6",
    photoUrl: "",
    expertise: "Health & Safety Management",
    experienceYears: 14,
    regionsWorked: ["Europe", "North America", "Middle East"],
    featured: false,
    status: "Active",
  },
];
