const express = require("express");
const UserRoute = require("../routes/userRoutes");
const agentRoute = require("../routes/AgentRoute");

const api = express.Router();

// api.use("/v1", agentRoute);
api.use("/v1", UserRoute);

module.exports = api;
