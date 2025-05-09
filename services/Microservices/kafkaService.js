const { producer,createConsumer } = require("../../Config/microservices/kafka");

const sendKafkaMessage = async (topic, payload) => {
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(payload) }],
  });
};

const receiveKafkaMessages = async (topic, groupId, callback) => {
  const consumer = createConsumer(groupId);
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: false });
  await consumer.run({
    eachMessage: async ({ message }) => {
      const parsed = JSON.parse(message.value.toString());
      callback(parsed);
    },
  });
};

module.exports = { sendKafkaMessage, receiveKafkaMessages };
