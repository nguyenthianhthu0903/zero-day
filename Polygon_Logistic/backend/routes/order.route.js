const express = require("express");
const Router = express.Router();
const orderController = require("../controllers/order.controller");

Router.post("/", orderController.addOrder);
Router.get("/", orderController.getOrders);
Router.patch("/", orderController.updateOrder);

module.exports = Router;
