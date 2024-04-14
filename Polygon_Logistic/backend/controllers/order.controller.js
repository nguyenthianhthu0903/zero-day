const order = require("../schema/Order");
const addOrder = (req, res) => {
  let { trackingNumber, status, location, receiver } = req.body;
  let newOrder = new order({
    trackingNumber,
    status,
    location,
    receiver,
  });
  newOrder
    .save()
    .then((order) => {
      return res.status(200).json({
        code: 200,
        message: "Add order success!",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        code: 500,
        message: err.message,
      });
    });
};

const getOrders = async (req, res) => {
  await order
    .find()
    .then((orders) => {
      return res.status(200).json({
        code: 200,
        message: "Success",
        data: orders,
      });
    })
    .catch((e) => {
      return res.status(500).json({
        code: 500,
        message: e.message,
      });
    });
};

const updateOrder = async (req, res) => {
  await order
    .findOneAndUpdate({ trackingNumber: req.body.trackingNumber }, req.body)
    .then((order) => {
      return res.status(200).json({
        code: 200,
        message: "Add order success!",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        code: 500,
        message: err.message,
      });
    });
};

module.exports = {
  addOrder,
  getOrders,
  updateOrder,
};
