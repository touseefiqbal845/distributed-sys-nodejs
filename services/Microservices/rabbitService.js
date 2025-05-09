const { getChannel } = require("../../Config/microservices/rabbitmq");

const publishTask = async (queue, data) => {
  const channel = getChannel();
  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)), { persistent: true });
};

const consumeTask = async (queue, callback) => {
  const channel = getChannel();
  await channel.assertQueue(queue, { durable: true });
  await channel.consume(queue, (msg) => {
    if (msg !== null) {
      const payload = JSON.parse(msg.content.toString());
      callback(payload);
      channel.ack(msg);
    }
  });
};

module.exports = { publishTask, consumeTask };
