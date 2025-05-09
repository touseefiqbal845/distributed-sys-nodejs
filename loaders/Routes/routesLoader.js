const {
  userRoutes,
  testRoutes,
} = require("../../routes");

const routesLoader = (app) => {
  app.use("/api/v2/test", testRoutes);
  app.use("/api/v2/auth", userRoutes);


  console.log("Routes have been loaded for version v2.");
};

module.exports = routesLoader;
