const userController = require("./Authentication");
const faceRecognitionController = require("./IdentityVerification/FaceRecognition");
const docsRecognitionController = require("./IdentityVerification/DocsRecognition");
const TokensController = require("./BlockChain/Tokens");


module.exports = {
  userController,
  faceRecognitionController,
  docsRecognitionController,
  TokensController,

};
