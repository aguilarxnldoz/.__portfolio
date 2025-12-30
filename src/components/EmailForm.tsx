"use client";
import {useState, useEffect} from "react";
import {ContactForm, contactForm} from "@/lib/zod";
import {ZodError} from "zod";
import {error} from "console";

export default function EmailForm() {
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [formError, setFormError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        try {
            event.preventDefault();
            const formData = new FormData();
            formData.append("email", email);
            formData.append("message", message);

            const {success, data, error} = contactForm.safeParse(formData);

            if (error) {
                console.log(error.message);
                setFormError(error.message);
                return;
            }

            const response = await fetch("/api/email", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: formData,
            });
        } catch (e) {
            console.error("Failed to send message", e);
            // setFormError(e as string);
        }
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="bg-linear-to-br from-crimson to-dark mx-auto p-3.5 rounded-md flex flex-col gap-2">
                    <input
                        type="text"
                        placeholder="your email"
                        onChange={handleEmailChange}
                        className="w-full bg-platinum rounded-md opacity-90 p-2"
                    />
                    <textarea
                        onChange={handleMessageChange}
                        className="w-full bg-platinum rounded-md opacity-90 p-2"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-platinum text-center w-40 rounded-md self-end p-2"
                    >
                        Send!
                    </button>
                </div>
            </form>

            <div className="bg-dark m-auto w-full p-3 rounded-md my-4 border-crimson border-4 text-center">{formError ? <p className="text-white">{JSON.parse(formError)[0]["message"]}</p> : <></>}</div>
        </>
    );
}
