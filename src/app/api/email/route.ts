import {NextResponse, NextRequest} from "next/server";
import {resend} from "@/lib/resend";
import {ContactForm, contactForm} from "@/lib/zod";
import EmailTemplate from "@/components/EmailTemplate";

export async function POST(req: NextRequest) {
    try {
        console.log("/api/email ENDPOINT HIT");

        const emailData = await req.json();
        console.log(emailData);
        const validateContact = contactForm.safeParse(emailData);

        if (validateContact.error) return NextResponse.json({error: validateContact.error, message: "Incorrect Format"}, {status: 400});
        const {email, message} = validateContact.data as ContactForm;

        const {data, error} = await resend.emails.send({
            from: process.env.RESEND_FROM as string,
            to: process.env.RESEND_TO as string,
            subject: message,
            react: EmailTemplate({email: email, message: message}),
        });

        if (error) return NextResponse.json({error: error.message}, {status: error.statusCode || 400});

        return NextResponse.json({data: data}, {status: 200});
    } catch (e) {
        console.error("Server Failure: ", e);
        return NextResponse.json({error: e}, {status: 500});
    }
}
