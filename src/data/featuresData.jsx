import { Home, Search, Users, BarChart2, Calendar, FileText } from "lucide-react";

export const features = [
  {
    id: 1,
    icon: <Home className="w-10 h-10 " />,
    title: "Property Management",
    description:
      "Efficiently manage your property listings, track leads, and automate tasks to stay ahead of the market.",
  },
  {
    id: 2,
    icon: <Search className="w-10 h-10 " />,
    title: "Advanced Search",
    description:
      "Find properties that meet your clients' exact needs with our powerful and intuitive search filters.",
  },
  {
    id: 3,
    icon: <Users className="w-10 h-10 " />,
    title: "Client Collaboration",
    description:
      "Collaborate with clients in real-time, share updates, and manage feedback in one centralized hub.",
  },
  {
    id: 4,
    icon: <BarChart2 className="w-10 h-10 " />,
    title: "Performance Analytics",
    description:
      "Gain insights into your business performance with detailed reports and actionable analytics.",
  },
  {
    id: 5,
    icon: <Calendar className="w-10 h-10 " />,
    title: "Scheduling & Reminders",
    description:
      "Schedule appointments, set reminders, and stay organized with our integrated calendar system.",
  },
  {
    id: 6,
    icon: <FileText className="w-10 h-10 " />,
    title: "Document Management",
    description:
      "Securely store, manage, and share all your important documents in one centralized location.",
  },
];
