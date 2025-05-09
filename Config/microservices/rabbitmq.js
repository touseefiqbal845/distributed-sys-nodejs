const amqp = require('amqplib');
require("dotenv").config();

const RABBITMQ_URL_CONNECTION = process.env.RABBITMQ_URL || "amqp://localhost";
let channel;
let connection;

const connectRabbitMQ = async () => {
  try {
    connection = await amqp.connect(RABBITMQ_URL_CONNECTION);
    channel = await connection.createChannel();
    await channel.prefetch(1);

    connection.on('error', (err) => {
      console.error('RabbitMQ connection error:', err);
    });

    connection.on('close', () => {
      console.warn('RabbitMQ connection closed, retrying in 5s...');
      setTimeout(connectRabbitMQ, 5000);
    });

    console.log('RabbitMQ connected and channel created');
  } catch (error) {
    console.error('Failed to connect to RabbitMQ:', error);
    process.exit(1);
  }
};

const getChannel = () => {
  if (!channel) {
    throw new Error('RabbitMQ channel is not initialized!');
  }
  return channel;
};

process.on('SIGINT', async () => {
  console.log('Closing RabbitMQ connection...');
  if (channel) await channel.close();
  if (connection) await connection.close();
  process.exit(0);
});

module.exports = { connectRabbitMQ, getChannel };
