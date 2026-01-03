import {Redis} from "@upstash/redis";
import {Ratelimit} from "@upstash/ratelimit";

export const redisClient = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export const redisRateLimiter = new Ratelimit({
    redis: redisClient,
    limiter: Ratelimit.slidingWindow(3, "24 h"),
    prefix: "@upstash/ratelimit",
    analytics: true,
});
