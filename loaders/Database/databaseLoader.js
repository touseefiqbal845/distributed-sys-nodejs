const connectDB = require("../../Config/db");
const {connectPostgres, syncDatabase} = require("../../Config/postgres");


const databaseLoader = async () => {
  await connectDB();
  await connectPostgres();
  await syncDatabase();
};

module.exports = databaseLoader;
