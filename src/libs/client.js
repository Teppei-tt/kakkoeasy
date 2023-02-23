import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "otoko-blog",
    apiKey: process.env.API_KEY,
});
