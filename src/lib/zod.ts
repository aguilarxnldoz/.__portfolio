import * as z from "zod";

// contact form validation

export const contactForm = z.object({
    email: z.email("Must send valid email"),
    message: z.string("Invalid Message").min(2, {message: "Message must be at least 2 characters long"}),
});

export type ContactForm = z.infer<typeof contactForm>;
