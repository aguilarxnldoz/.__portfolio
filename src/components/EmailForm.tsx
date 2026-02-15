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
                const data = await response.json().catch(() => null);
                const errorMessage = data && data.error ? data.error : response.statusText || "Server Failure";
                setFormError(typeof errorMessage === "string" ? errorMessage : JSON.stringify(errorMessage));
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

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        if (formError) setFormError(null);
    };
    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
        if (formError) setFormError(null);
    };

    return (
        <>
            <div
                id="send-message-success"
                className={`ease-in-out transition-all duration-500 ${isSent ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
            >
                <p className="text-center font-bold text-crimson">Your message reached me🖤</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="bg-platinum mx-auto p-3.5 rounded-xl flex flex-col gap-2 md:w-150 md:mt-10 shadow-sm shadow-crimson border">
                    <input
                        type="text"
                        placeholder="your email"
                        onChange={handleEmailChange}
                        className="w-full bg-white rounded-md opacity-70 p-2"
                    />
                    <textarea
                        onChange={handleMessageChange}
                        className="w-full bg-white rounded-md opacity-70 p-2 resize-none"
                        placeholder="enter your message"
                        cols={9}
                        rows={5}
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-crimson text-platinum text-center w-40 rounded-md self-end p-2"
                        disabled={isSending}
                    >
                        {isSending ? <LoadingDots /> : "Send"}
                    </button>
                </div>
            </form>

            <div
                id="error-container"
                className={`bg-platinum m-auto xl:w-[25%] p-3 rounded-xl my-4 border-dark border shadow-sm shadow-crimson text-center ${formError ? "block" : "hidden"}`}
            >
                {formError ? (
                    <p className="text-crimson font-bold underline">
                        {(() => {
                            try {
                                const parsed = JSON.parse(formError);
                                return parsed?.[0]?.message + "  😂🫵🗑️💩🤡" || formError + "  😂🫵🗑️💩🤡";
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
