  const { setCache,getCache,deleteCache } = require("../services/Microservices/cacheService");
  const { receiveKafkaMessages, sendKafkaMessage } = require("../services/Microservices/kafkaService");
  const { publishTask, consumeTask } = require("../services/Microservices/rabbitService");


  const sendTestMessage = async (req, res) => {
    try {
      const message = {
        type: "greeting",
        text: "Hello from Astra Kafka Team12!",
        timestamp: new Date().toISOString(),
      };

      await sendKafkaMessage("document-verification", message);
      res.status(200).json({ success: true, message: "Kafka message sent" });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  };

  const startDocVerifier = () => {
    receiveKafkaMessages("document-verification", "doc-verifier", (message) => {
      console.log("✅ [Doc Verifier] Message:", message);
    });
  };

  const startFraudChecker = () => {
    receiveKafkaMessages("document-verification", "fraud-checker", (message) => {
      console.log("🚨 [Fraud Checker] Message:", message);
    });
  };

const sendRabbitMQTestMessage = async (req, res) => {
  try {
    const message = {
      type: "greeting",
      text: "Hello from Astra RabbitMQ Team12!",
      timestamp: new Date().toISOString(),
    };

    await publishTask("touseef-queue", message);
    res.status(200).json({ success: true, message: "RabbitMQ message sent" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const listenToRabbitMQTestMessages = async () => {
  await consumeTask("touseef-queue", (message) => {
    console.log("📨 Received RabbitMQ Message:", message);
  });
};

const setRedisTestCache = async (req, res) => {
    try {
      const key = "test:greeting";
      const value = {
        text: "Hello from Astra Redis Team12!",
        timestamp: new Date().toISOString(),
      };
  
      await setCache(key, value, 300); 
      res.status(200).json({ success: true, message: "Redis cache set", key });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  };

  const getRedisTestCache = async (req, res) => {
    try {
      const key = "test:greeting";
      const value = await getCache(key);
  
      if (value) {
        res.status(200).json({ success: true, data: value });
      } else {
        res.status(404).json({ success: false, message: "No cache found for key" });
      }
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  };
  

  const deleteRedisTestCache = async (req, res) => {
    try {
      const key = "test:greeting";
      await deleteCache(key);
      res.status(200).json({ success: true, message: "Redis cache deleted", key });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  };

  
  

module.exports = {
  sendTestMessage,
  startDocVerifier,
  startFraudChecker,
  sendRabbitMQTestMessage,
  listenToRabbitMQTestMessages,
  setRedisTestCache,
  getRedisTestCache,
  deleteRedisTestCache,
};
