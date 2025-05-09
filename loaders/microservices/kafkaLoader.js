const { producer,createConsumer} = require("../../Config/microservices/kafka");

const kafkaLoader = async () => {
  await producer.connect();
  console.log("Kafka producer & consumer connected");
};

module.exports = kafkaLoader;
