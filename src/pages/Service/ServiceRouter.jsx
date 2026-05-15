import React from "react";
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

import CompanyRegistration from "./legal/CompanyRegistration";
import GSTRegistrationService from "./legal/GSTRegistrationService";
import GSTReturnFilingServices from "./legal/GSTReturnFilingServices";
import CompanyAnnualFilingServices from "./legal/CompanyAnnualFilingServices";
import CompanyAuditSupportServices from "./legal/CompanyAuditSupportServices";
import FSSAIRegistrationServices from "./legal/FSSAIRegistrationServices";
import MSMEUdyamRegistrationServices from "./legal/MSMEUdyamRegistrationServices";
import IECRegistrationServices from "./legal/IECRegistrationServices";
import ShopEstablishmentRegistrationServices from "./legal/ShopEstablishmentRegistrationServices";
import ProfessionalTaxRegistrationServices from "./legal/ProfessionalTaxRegistrationServices";
import PFRegistrationServices from "./legal/PFRegistrationServices";
import ESICRegistrationServices from "./legal/ESICRegistrationServices";
import DigitalSignatureCertificate from "./legal/DigitalSignatureCertificate";
import DataITComplianceConsultingServices from "./legal/DataITComplianceConsultingServices";
import TrustRegistrationServices from "./legal/TrustRegistrationServices";
import NGORegistrationServices from "./legal/NGORegistrationServices";
import SocietyRegistrationServices from "./legal/SocietyRegistrationServices";
import DocumentDraftingServices from "./legal/DocumentDraftingServices";
import IdentityDocumentVerificationServices from "./legal/IdentityDocumentVerificationServices";
import LegalResearchComplianceCheckServices from "./legal/LegalResearchComplianceCheckServices";
import CyberCrimeComplaintAssistanceServices from "./legal/CyberCrimeComplaintAssistanceServices";
import ConsumerCourtCaseSupportServices from "./legal/ConsumerCourtCaseSupportServices";
import LegalNoticePreparationServices from "./legal/LegalNoticePreparationServices";
import ContractDraftingAgreementPreparationServices from "./legal/ContractDraftingAgreementPreparationServices";
import CaseDraftingLegalDocumentationServices from "./legal/CaseDraftingLegalDocumentationServices";
import CyberLawConsultantServices from "./legal/CyberLawConsultantServices";
import LegalConsultationServices from "./legal/LegalConsultationServices";

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

      {/* ✅ LEGAL SERVICES */}
      <Route path="legal/company-registration" element={<CompanyRegistration />} />
      <Route path="legal/gst-registration-service" element={<GSTRegistrationService />} />
      <Route path="legal/gst-return-filing-services" element={<GSTReturnFilingServices />} />
      <Route path="legal/company-annual-filing-services" element={<CompanyAnnualFilingServices />} />
      <Route path="legal/company-audit-support-services" element={<CompanyAuditSupportServices />} />
      <Route path="legal/fssai-registration-services" element={<FSSAIRegistrationServices />} />
      <Route path="legal/msme-udyam-registration-services" element={<MSMEUdyamRegistrationServices />} />
      <Route path="legal/iec-registration-services" element={<IECRegistrationServices />} />
      <Route path="legal/shop-establishment-registration-services" element={<ShopEstablishmentRegistrationServices />} />
      <Route path="legal/professional-tax-registration-services" element={<ProfessionalTaxRegistrationServices />} />
      <Route path="legal/pf-registration-services" element={<PFRegistrationServices />} />
      <Route path="legal/esic-registration-services" element={<ESICRegistrationServices />} />
      <Route path="legal/digital-signature-certificate" element={<DigitalSignatureCertificate />} />
      <Route path="legal/data-it-compliance-consulting-services" element={<DataITComplianceConsultingServices />} />
      <Route path="legal/trust-registration-services" element={<TrustRegistrationServices />} />
      <Route path="legal/ngo-registration-services" element={<NGORegistrationServices />} />
      <Route path="legal/society-registration-services" element={<SocietyRegistrationServices />} />
      <Route path="legal/document-drafting-services" element={<DocumentDraftingServices />} />
      <Route path="legal/identity-document-verification-services" element={<IdentityDocumentVerificationServices />} />
      <Route path="legal/legal-research-compliance-check-services" element={<LegalResearchComplianceCheckServices />} />
      <Route path="legal/cyber-crime-complaint-assistance-services" element={<CyberCrimeComplaintAssistanceServices />} />
      <Route path="legal/consumer-court-case-support-services" element={<ConsumerCourtCaseSupportServices />} />
      <Route path="legal/legal-notice-preparation-services" element={<LegalNoticePreparationServices />} />
      <Route path="legal/contract-drafting-agreement-preparation-services" element={<ContractDraftingAgreementPreparationServices />} />
      <Route path="legal/case-drafting-legal-documentation-services" element={<CaseDraftingLegalDocumentationServices />} />
      <Route path="legal/cyber-law-consultant-services" element={<CyberLawConsultantServices />} />
      <Route path="legal/legal-consultation-services" element={<LegalConsultationServices />} />

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
