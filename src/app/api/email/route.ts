import {NextResponse, NextRequest} from "next/server";
import {resend} from "@/lib/resend";
import {ContactForm, contactForm} from "@/lib/zod";
import EmailTemplate from "@/components/EmailTemplate";
import DOMPurify from "isomorphic-dompurify";
import {limitEmails} from "@/lib/limitEmails";

export async function POST(req: NextRequest) {
    try {
        const rateLimitResponse = await limitEmails(req);
        if (rateLimitResponse) return rateLimitResponse;

        const emailData = await req.json();
        console.log(emailData);
        const validateContact = contactForm.safeParse(emailData);

        if (validateContact.error) return NextResponse.json({error: validateContact.error, message: "Incorrect Format"}, {status: 400});
        const {email, message} = validateContact.data as ContactForm;

        const cleanMessage = DOMPurify.sanitize(message);

        const {data, error} = await resend.emails.send({
            from: process.env.RESEND_FROM as string,
            to: process.env.RESEND_TO as string,
            subject: message,
            react: EmailTemplate({email: email, message: cleanMessage}),
        });

        if (error) return NextResponse.json({error: error.message}, {status: error.statusCode || 400});

        return NextResponse.json({data: data}, {status: 200});
    } catch (e) {
        console.error("Server Failure: ", e);
        const errorMessage = e instanceof Error ? e.message : "Unknown Server Error";
        return NextResponse.json({error: errorMessage}, {status: 500});
    }
}
