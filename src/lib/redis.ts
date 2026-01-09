import {Redis} from "@upstash/redis";
import {Ratelimit} from "@upstash/ratelimit";

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    console.warn("Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN environment variables");
}

export const redisClient = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL || "https://example.upstash.io",
    token: process.env.UPSTASH_REDIS_REST_TOKEN || "example_token",
});

export const redisRateLimiter = new Ratelimit({
    redis: redisClient,
    limiter: Ratelimit.slidingWindow(3, "24 h"),
    prefix: "@upstash/ratelimit",
    analytics: true,
});
