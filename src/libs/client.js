import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "kakkoeasy",
    apiKey: process.env.API_KEY,
});
