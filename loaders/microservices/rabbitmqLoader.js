const { connectRabbitMQ } = require("../../Config/microservices/rabbitmq");

const rabbitmqLoader = async () => {
  await connectRabbitMQ();
};

module.exports = rabbitmqLoader;
