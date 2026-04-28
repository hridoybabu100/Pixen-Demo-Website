import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const client = new MongoClient(process.env.PIXGEN_URL);
const db = client.db('PixenDemo');

export const auth = betterAuth({
  database: mongodbAdapter(db, {

      emailAndPassword: { 
    enabled: true, 
  }, 
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});