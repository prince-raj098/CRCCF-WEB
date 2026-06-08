import { Routes, Route } from "react-router-dom";

import ServicesPage from "../ServicesPage";
import SoftwareITServices from "./OurService/SoftwareITServices";
import DigitalMarketingServices from "./OurService/DigitalMarketingServices";
import VictimSupportServices from "./OurService/VictimSupportServices";
import LegalInformationDocumentationSupport from "./OurService/LegalInformationDocumentationSupport";
import CyberSecurityServices from "./OurService/CyberSecurityServices";
import CyberInvestigationServices from "./OurService/CyberInvestigationServices";
import LegalServices from "./OurService/LegalServices";
import EducationServices from "./OurService/EducationServices";
import TrainingInternshipServices from "./OurService/TrainingInternshipServices";
import PlacementServices from "./OurService/PlacementServices";
import ServiceComingSoon from "./ServiceComingSoon";
import LegalSupport from "./OurService/LegalSupport";
import CyberAwareness from "./cyberAwareness/CyberAwareness";


import SoftwareServicesIntroduction from "./softwareIT/SoftwareServicesIntroduction";
import AMCServices from "./softwareIT/AMCServices";
import EndToEndWebDevelopment from "./softwareIT/EndToEndWebDevelopment";
import MobileApplicationDevelopment from "./softwareIT/MobileApplicationDevelopment";
import DesktopLaptopSoftwareSolutions from "./softwareIT/DesktopLaptopSoftwareSolutions";
import ArtificialIntelligenceSolutions from "./softwareIT/ArtificialIntelligenceSolutions";
import ITSupport from "./softwareIT/ITSupport";
import TechnicalAssistance from "./softwareIT/TechnicalAssistance";


const ServiceRouter = () => {
  return (
    <Routes>
      <Route index element={<ServicesPage />} />

      <Route path="software-it" element={<SoftwareITServices />} />
      <Route path="digital-marketing" element={<DigitalMarketingServices />} />
      <Route path="victim-support" element={<VictimSupportServices />} />
      <Route path="legal-docs" element={<LegalInformationDocumentationSupport />} />
      <Route path="cyber-security" element={<CyberSecurityServices />} />
      <Route path="cyber-investigation" element={<CyberInvestigationServices />} />
      <Route path="legal-services" element={<LegalServices />} />
      <Route path="education" element={<EducationServices />} />
      <Route path="training-internship" element={<TrainingInternshipServices />} />
      <Route path="placement" element={<PlacementServices />} />
      
      {/* NEW PENDING SERVICES */}
      <Route path="cyber-awareness" element={<CyberAwareness />} />
      <Route path="legal-support" element={<LegalSupport />} />
      <Route path="technical-assistance" element={<ServiceComingSoon title="Technical Assistance" />} />
      <Route path="innovation-technology" element={<ServiceComingSoon title="Innovation & Technology" />} />

      {/* ✅ LEGAL SERVICES */}

      {/* ✅ SOFTWARE SERVICES */}
      <Route path="software-it/software-services-introduction" element={<SoftwareServicesIntroduction />} />
      <Route path="software-it/amc-services" element={<AMCServices />} />
      <Route path="software-it/end-to-end-web-development" element={<EndToEndWebDevelopment />} />
      <Route path="software-it/mobile-application-development" element={<MobileApplicationDevelopment />} />
      <Route path="software-it/desktop-laptop-software-solutions" element={<DesktopLaptopSoftwareSolutions />} />
      <Route path="software-it/artificial-intelligence-solutions" element={<ArtificialIntelligenceSolutions />} />
      <Route path="software-it/it-support" element={<ITSupport />} />
      <Route path="software-it/technical-assistance" element={<TechnicalAssistance />} />

    </Routes>
  );
};

export default ServiceRouter;
