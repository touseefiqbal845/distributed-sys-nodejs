const express = require("express");
const { sendTestMessage, startDocVerifier ,startFraudChecker,sendRabbitMQTestMessage,listenToRabbitMQTestMessages,setRedisTestCache,getRedisTestCache,deleteRedisTestCache} = require("../Controllers/test");

const router = express.Router();

//Microservices Testing Routes
router.post("/test",sendTestMessage );
router.post("/test0",startDocVerifier );
router.post("/test1",startFraudChecker );
router.post("/test2",sendRabbitMQTestMessage );
router.post("/test3",listenToRabbitMQTestMessages );
router.post("/test4",setRedisTestCache );
router.post("/test5",getRedisTestCache );
router.post("/test6",deleteRedisTestCache );



module.exports = router;
