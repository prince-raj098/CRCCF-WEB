import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LegalCompliance from './LegalCompliance';
import OurLegalIdentity from './about/legalCompliance/OurLegalIdentity';
import OurLegalEntity from './about/legalCompliance/OurLegalEntity';
import LegalAuthorizationsCyberLicenses from './about/legalCompliance/LegalAuthorizationsCyberLicenses';
import LegalRightOperationalLimits from './about/legalCompliance/LegalRightOperationalLimits';
import CRCCFLegalRights from './about/legalCompliance/CRCCFLegalRights';
import LegalEthicalCompliance from './about/legalCompliance/LegalEthicalCompliance';
import CyberCrimeInvestigationApproval from './about/legalCompliance/CyberCrimeInvestigationApproval';
import OurCyberInvestigationCapacity from './about/legalCompliance/OurCyberInvestigationCapacity';
import DigitalInvestigationInfrastructure from './about/legalCompliance/DigitalInvestigationInfrastructure';
import OurRoleInCybercrimeInvestigation from './about/legalCompliance/OurRoleInCybercrimeInvestigation';
import InvestigationScopeSocialResponsibility from './about/legalCompliance/InvestigationScopeSocialResponsibility';
import CyberInvestigationComplianceFramework from './about/legalCompliance/CyberInvestigationComplianceFramework';
import InvestigationEthicsLegalStandards from './about/legalCompliance/InvestigationEthicsLegalStandards';
import CyberSecurityInvestigationProtocols from './about/legalCompliance/CyberSecurityInvestigationProtocols';
import DigitalSecurityCertification from './about/legalCompliance/DigitalSecurityCertification';
import OperationalResourcesTeam from './about/legalCompliance/OperationalResourcesTeam';
import CybercrimeResponseCapabilities from './about/legalCompliance/CybercrimeResponseCapabilities';
import TeamToolTechCapacity from './about/legalCompliance/TeamToolTechCapacity';
import ComplianceWithIndianCyberLaws from './about/legalCompliance/ComplianceWithIndianCyberLaws';
import CyberLawComplianceStandards from './about/legalCompliance/CyberLawComplianceStandards';
import ComplianceWithCybercrimeRegulation from './about/legalCompliance/ComplianceWithCybercrimeRegulation';
import CybercrimeComplianceFramework from './about/legalCompliance/CybercrimeComplianceFramework';
import ResourceAndReport from './about/legalCompliance/ResourceAndReport';
import RecognizedPowerAndResponsibility from './about/legalCompliance/RecognizedPowerAndResponsibility';

const LegalComplianceRouter = () => {
  return (
    <Routes>
      <Route index element={<LegalCompliance />} />
      <Route path="our-legal-identity" element={<OurLegalIdentity />} />
      <Route path="our-legal-entity" element={<OurLegalEntity />} />
      <Route path="legal-authorizations-cyber-licenses" element={<LegalAuthorizationsCyberLicenses />} />
      <Route path="legal-right-operational-limits" element={<LegalRightOperationalLimits />} />
      <Route path="crccf-legal-rights" element={<CRCCFLegalRights />} />
      <Route path="legal-ethical-compliance" element={<LegalEthicalCompliance />} />
      <Route path="cyber-crime-investigation-approval" element={<CyberCrimeInvestigationApproval />} />
      <Route path="our-cyber-investigation-capacity" element={<OurCyberInvestigationCapacity />} />
      <Route path="digital-investigation-infrastructure" element={<DigitalInvestigationInfrastructure />} />
      <Route path="our-role-in-cybercrime-investigation" element={<OurRoleInCybercrimeInvestigation />} />
      <Route path="investigation-scope-social-responsibility" element={<InvestigationScopeSocialResponsibility />} />
      <Route path="cyber-investigation-compliance-framework" element={<CyberInvestigationComplianceFramework />} />
      <Route path="investigation-ethics-legal-standards" element={<InvestigationEthicsLegalStandards />} />
      <Route path="cyber-security-investigation-protocols" element={<CyberSecurityInvestigationProtocols />} />
      <Route path="digital-security-certification" element={<DigitalSecurityCertification />} />
      <Route path="operational-resources-team" element={<OperationalResourcesTeam />} />
      <Route path="cybercrime-response-capabilities" element={<CybercrimeResponseCapabilities />} />
      <Route path="team-tool-tech-capacity" element={<TeamToolTechCapacity />} />
      <Route path="compliance-with-indian-cyber-laws" element={<ComplianceWithIndianCyberLaws />} />
      <Route path="cyber-law-compliance-standards" element={<CyberLawComplianceStandards />} />
      <Route path="compliance-with-cybercrime-regulation" element={<ComplianceWithCybercrimeRegulation />} />
      <Route path="cybercrime-compliance-framework" element={<CybercrimeComplianceFramework />} />
      <Route path="resource-and-report" element={<ResourceAndReport />} />
      <Route path="recognized-power-and-responsibility" element={<RecognizedPowerAndResponsibility />} />
    </Routes>
  );
};

export default LegalComplianceRouter;
