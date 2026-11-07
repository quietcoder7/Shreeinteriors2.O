const mongoose = require("mongoose");
const dns = require("node:dns");

function configureMongoDns() {
  const dnsServers = process.env.MONGODB_DNS_SERVERS
    ?.split(",")
    .map((server) => server.trim())
    .filter(Boolean);

  if (dnsServers?.length) {
    dns.setServers(dnsServers);
  }
}

function normalizeMongoUri(uri) {
  // MongoDB URI credentials must percent-encode reserved characters such as @.
  // Split at the final @ so a raw @ in a local .env password is handled safely.
  const match = uri.match(/^(mongodb(?:\+srv)?:\/\/)([^:/?#]+):(.*)@([^/?#]+)(.*)$/);

  if (!match) {
    return uri;
  }

  const [, scheme, username, password, host, suffix] = match;
  let decodedPassword;

  try {
    decodedPassword = decodeURIComponent(password);
  } catch {
    decodedPassword = password;
  }

  const encodedPassword = encodeURIComponent(decodedPassword).replace(
    /[!'()*]/g,
    (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`
  );

  return `${scheme}${username}:${encodedPassword}@${host}${suffix}`;
}

async function connectDB() {
  const mongoUri = normalizeMongoUri(process.env.MONGODB_URI || "");

  if (!mongoUri) {
    throw new Error("MONGODB_URI is missing. Add it to backend/.env");
  }

  try {
    configureMongoDns();
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
}

module.exports = connectDB;
