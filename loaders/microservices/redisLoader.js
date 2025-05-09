const { connectRedis } = require("../../Config/microservices/redis");

const redisLoader = async () => {
  await connectRedis();
};

module.exports = redisLoader;
