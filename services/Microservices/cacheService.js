const client = require("../../Config/microservices/redis");

const setCache = async (key, value, ttl = 3600) => {
  await client.setEx(key, ttl, JSON.stringify(value));
};

const getCache = async (key) => {
  const data = await client.get(key);
  return data ? JSON.parse(data) : null;
};

const deleteCache = async (key) => {
  await client.del(key);
};

module.exports = { setCache, getCache, deleteCache };
