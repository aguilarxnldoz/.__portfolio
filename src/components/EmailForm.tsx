"use client";
import {useState, useEffect} from "react";
import {contactForm} from "@/lib/zod";
import LoadingDots from "./custom/LoadingDots";

export default function EmailForm() {
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [formError, setFormError] = useState<string | null>(null);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [isSent, setIsSent] = useState<boolean>(false);

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

            const response = await fetch("/api/email", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, message}),
            });

            if (!response.ok) {
                const {error} = await response.json().catch(() => null);
                setFormError(error || (response.statusText as string));
                throw new Error("Server Failure");
            }

            setIsSent(true);
        } catch (e) {
            console.error("Failed to send message", e);
        } finally {
            setIsSending(false);
            return;
        }
    };

    useEffect(() => {
        if (!isSent) return;
        setTimeout(() => {
            setIsSent(false);
        }, 5000);
        return;
    }, [isSent]);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value);

    return (
        <>
            <div
                id="send-message-success"
                className={`ease-in-out transition-all duration-500 ${isSent ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
            >
                <p className="text-center font-bold text-crimson">Your message reached me🖤</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="bg-linear-to-br from-crimson to-dark mx-auto p-3.5 rounded-md flex flex-col gap-2 md:w-150 md:mt-10">
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
                        disabled={isSending}
                    >
                        {isSending ? <LoadingDots /> : "Send"}
                    </button>
                </div>
            </form>

            <div
                id="error-container"
                className={`bg-dark m-auto w-full p-3 rounded-md my-4 border-crimson border-4 text-center ${formError ? "block" : "hidden"}`}
            >
                {formError ? (
                    <p className="text-white">
                        {(() => {
                            try {
                                const parsed = JSON.parse(formError);
                                return parsed?.[0]?.message || formError;
                            } catch {
                                return formError;
                            }
                        })()}
                    </p>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}
