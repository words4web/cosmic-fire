import { PageId } from "./navigation";

export interface ConsultationFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  serviceRequired: string;
  facilityType: string;
  message: string;
}

export interface ContactSectionProps {
  onNavigate: (page: PageId) => void;
  standalone?: boolean;
}
