import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(80, { message: 'Name must not exceed 80 characters.' }),
  email: z
    .string()
    .min(1, { message: 'Email address is required.' })
    .email({ message: 'Please enter a valid email address.' }),
  subject: z
    .string()
    .min(3, { message: 'Subject must be at least 3 characters.' })
    .max(120, { message: 'Subject must not exceed 120 characters.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long.' })
    .max(2000, { message: 'Message must not exceed 2000 characters.' }),
  // Honeypot spam protection field (should remain empty for real humans)
  hp_field: z.string().max(0, { message: 'Spam submission detected.' }).optional().or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
