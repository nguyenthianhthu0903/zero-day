const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
require("dotenv").config();

const app = express();
const order = require("./routes/order.route");

app.use(cors());
app.use(express.json());

app.use("/order", order);
app.get("/test", (req, res) => {
  return res.json("Success");
});

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
