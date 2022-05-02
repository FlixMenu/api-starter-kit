
import { rateLimit } from "express-rate-limit";
import httpStatus from "http-status";
import customRequestError from "../helpers/error";


export const customlimiter = rateLimit({
    windowMs: 3000, // 15 minutes
    max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: 'You have exceeded the 100 requests in 24 hrs limit!',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    handler: (req, res, next) => {
        customRequestError(res, httpStatus.TOO_MANY_REQUESTS, "You sent too many requests. Please wait a while then try again")
        return next()
    }
})
