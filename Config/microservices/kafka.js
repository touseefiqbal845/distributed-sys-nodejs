const { Kafka } = require('kafkajs');
require("dotenv").config();


const broker = process.env.KAFKA_BROKER_URL || "localhost:9092";

const kafka = new Kafka({
  clientId: 'astra-app',
  brokers: ['kafka:9092']

});

const producer = kafka.producer();
const createConsumer = (groupId) => kafka.consumer({ groupId });

module.exports = { kafka, producer, createConsumer };
