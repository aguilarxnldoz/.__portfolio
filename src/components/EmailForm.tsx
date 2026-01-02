"use client";
import {useState, useEffect} from "react";
import {ContactForm, contactForm} from "@/lib/zod";

export default function EmailForm() {
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [formError, setFormError] = useState<string | null>(null);
    const [isSending, setIsSending] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent) => {
        try {
            event.preventDefault();
            setIsSending(true);

            const {error} = contactForm.safeParse({email: email, message: message});

            if (error) {
                console.error(error.message);
                setFormError(error.message);
                throw error;
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/email`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, message}),
            });

            if (!response.ok) {
                setFormError(response.statusText as string);
                throw new Error("Server Failure");
            }

            const {data} = await response.json();
            console.log("SUCESSFUL SEND!", data);
            setIsSending(false);
        } catch (e) {
            console.error("Failed to send message", e);
            return;
        }
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="bg-linear-to-br from-crimson to-dark mx-auto p-3.5 rounded-md flex flex-col gap-2 md:w-100">
                    <input
                        type="text"
                        placeholder="your email"
                        onChange={handleEmailChange}
                        className="w-full bg-platinum rounded-md opacity-90 p-2"
                    />
                    <textarea
                        onChange={handleMessageChange}
                        className="w-full bg-platinum rounded-md opacity-90 p-2"
                        placeholder="enter your message"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-platinum text-center w-40 rounded-md self-end p-2"
                    >
                        Send!
                    </button>
                </div>
            </form>

            <div className={`bg-dark m-auto w-full p-3 rounded-md my-4 border-crimson border-4 text-center ${formError ? "block" : "hidden"}`}>
                {formError ? <p className="text-white">{JSON.parse(formError)[0]["message"] || formError}</p> : <></>}
            </div>
        </>
    );
}
