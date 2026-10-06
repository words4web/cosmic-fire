import { z } from "zod";

const ukPhoneRegex =
  /^(?:(?:\+44\s?|0)(?:7\d{3}\s?\d{6}|[12389]\d{2,4}\s?\d{3,4}\s?\d{3,4}))$/;

export const consultationFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),
  company: z
    .string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .max(120, "Company name cannot exceed 120 characters"),
  email: z.email("Please enter a valid business email address"),
  phone: z
    .string()
    .trim()
    .regex(
      ukPhoneRegex,
      "Please enter a valid UK phone or mobile number (e.g. 07123 456789 or +44 7123 456789)",
    ),
  location: z
    .string()
    .trim()
    .min(2, "Facility location or UK city/postcode is required")
    .max(100, "Location cannot exceed 100 characters"),
  serviceRequired: z.string().min(1, "Please select a service discipline"),
  facilityType: z.string(),
  message: z
    .string()
    .trim()
    .min(
      10,
      "Please provide at least 10 characters describing the project scope",
    )
    .max(2000, "Project description cannot exceed 2000 characters"),
});

export type ConsultationFormInput = z.infer<typeof consultationFormSchema>;

export const defaultConsultationValues: ConsultationFormInput = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  location: "",
  serviceRequired: "Fire Risk Assessment",
  facilityType: "Commercial High-Rise",
  message: "",
};
