import {redisRateLimiter} from "@/lib/redis";
import {NextRequest, NextResponse} from "next/server";
import {waitUntil} from "@vercel/functions";

export const limitEmails = async (req: NextRequest) => {
	try {
		const forwardedFor = req.headers.get("x-forwarded-for");
		const ip = forwardedFor?.split(",")[0]?.trim() || "127.0.0.1";
		const identifier = `email:${ip}`;
		const {success, limit, remaining, reset, pending} = await redisRateLimiter.limit(identifier);
		waitUntil(pending);
		if (!success) {
			const retryAfterSec = Math.max(0, Math.ceil((reset - Date.now()) / 1000));
			return NextResponse.json(
				{
					error: "Email Limit reached!",
					limit,
					remaining,
					reset,
					retryAfterSec,
				},
				{
					status: 429,
					headers: {
						"Retry-After": String(retryAfterSec),
					},
				},
			);
		}
		return null;
	} catch (e) {
		console.error("Rate Limit Error: ", e);
		return null;
	}
};
