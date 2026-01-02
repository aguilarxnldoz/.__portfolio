import {ContactForm} from "@/lib/zod";

export default function EmailTemplate({email, message}: ContactForm) {
    return (
        <>
            <h1>Message from: {email}</h1>
            <p>{message}</p>
        </>
    );
}
