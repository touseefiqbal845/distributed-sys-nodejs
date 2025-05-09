const { createClient } = require('redis');
require("dotenv").config();

const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";


const client = createClient({
  url: REDIS_URL,
});

client.on('error', (err) => console.error('Redis error:', err));

const connectRedis = async () => {
  await client.connect();
  console.log('Redis connected');
};

module.exports = client;
module.exports.connectRedis = connectRedis;
