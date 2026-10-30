import * as z from "zod";
import { CONTACT_SERVICE_OPTIONS } from "@/constants/portfolio";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(150, "Email is too long."),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(200, "Subject is too long."),
  service: z.string().trim().optional().default(CONTACT_SERVICE_OPTIONS[0]),
  budget: z.string().trim().optional().default("$5k - $10k"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(3000, "Message is too long."),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

