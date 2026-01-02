"use client";

export default function LoadingDots() {
    return (
        <>
            <div className="flex flex-row gap-2">
                <p className="inline">Sending</p>
                <div className="w-4 h-4 rounded-full bg-crimson animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-crimson animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-crimson animate-bounce [animation-delay:-.5s]"></div>
            </div>
        </>
    );
}
