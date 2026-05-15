import {
  ShieldAlert,
  Search,
  Lightbulb,
  Users,
  HeartHandshake,
  Info,
  BookOpen,
  ClipboardList,
  Scale,
  Gavel,
  FileCheck,
  HelpCircle,
  AlertTriangle,
  Eye,
  FileText,
  Book,
  Trophy,
  FileSpreadsheet, // ✅ Case Study
  ShieldCheck, // ✅ Cyber Security Prevention
  LifeBuoy, // ✅ Cyber Crime Safety Tips
} from "lucide-react";

export const reportCards = [
  { title: "Report Cyber Crime", icon: ShieldAlert, path: "/report" },

  { title: "Check Complaint Status", icon: Search, path: "/status" },

  { title: "Cyber Security Tips", icon: Lightbulb, path: "/tips" },

  { title: "Cyber Safety for Women", icon: Users, path: "/women-safety" },

  { title: "Victim Rights & Support", icon: HeartHandshake, path: "/rights" },

  { title: "Introduction", icon: Info, path: "/introduction" },

  { title: "Instructions", icon: BookOpen, path: "/instructions" },

  { title: "Guidelines", icon: ClipboardList, path: "/guidelines" },

  { title: "Rules & Regulations", icon: Scale, path: "/rules" },

  { title: "Legal Guidance", icon: Gavel, path: "/legal" },

  { title: "Declarations", icon: FileCheck, path: "/declarations" },

  { title: "How to Report", icon: HelpCircle, path: "/how-to-report" },

  { title: "Case Reporting", icon: AlertTriangle, path: "/case-report" },

  { title: "Awareness & Prevention", icon: Eye, path: "/awareness" },

  { title: "Types of Cyber Crimes", icon: FileText, path: "/types" },

  { title: "Cyber Laws & Rights", icon: Book, path: "/laws" },

  { title: "Success Stories", icon: Trophy, path: "/stories" },

  // ✅ UPDATED LAST 3 CARDS

  {
    title: "Case Study",
    icon: FileSpreadsheet,
    path: "/case-study",
  },

  {
    title: "Cyber Security Prevention",
    icon: ShieldCheck,
    path: "/cyber-security-prevention",
  },

  {
    title: "Cyber Crime Safety Tips",
    icon: LifeBuoy,
    path: "/cyber-crime-safety-tips",
  },
];
