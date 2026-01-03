import {redisClient, redisRateLimiter} from "@/lib/redis";
import {NextRequest, NextResponse} from "next/server";
import {waitUntil} from "@vercel/functions";

export const limitEmails = async (req: NextRequest) => {
    try {
        const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
        const identifier = `email:${ip}`;
        const {success, limit, remaining, pending} = await redisRateLimiter.limit(identifier);
        waitUntil(pending);
        if (!success) return NextResponse.json({error: "Email Limit reached!"}, {status: 429});
        return null;
    } catch (e) {
        console.error("Rate Limit Error: ", e);
        return null;
    }
};
