const databaseLoader = require("./Database/databaseLoader");
const expressLoader = require("./ExpressJs/expressLoader");
const kafkaLoader = require("./microservices/kafkaLoader");
const rabbitmqLoader = require("./microservices/rabbitmqLoader");
const redisLoader = require("./microservices/redisLoader");
const routesLoader = require("./Routes/routesLoader");

const initializeLoaders = async (app) => {
  await databaseLoader();
  // await kafkaLoader();
  // await rabbitmqLoader();
  // await redisLoader();
  expressLoader(app);
  routesLoader(app);
  console.log("everything load");
};

module.exports = initializeLoaders;
