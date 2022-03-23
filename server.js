require("dotenv").config();
const express = require("express");
const connectDB = require("./config/ConnectDB");
const PORT = process.env.PORT || 5555;
const cors = require("cors");
const morgan = require("morgan");
const color = require("colors");
const UserRoute = require("./routes/userRoutes");
const FarmerRoute = require("./routes/farmerRoutes");
const InvestorRoute = require("./routes/InvestorRoute");
const bodyParser = require("body-parser");
const ProduceRoute = require("./routes/produceRoutes");
const CartRoute = require("./routes/CartRoute");
const AdminRoute = require("./routes/AdminIRoutes");

const { notFound, errorHandler } = require("./middlewares/ErrorHandler");

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("hello lakes");
});

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/user", UserRoute);
app.use("/api/farmer", FarmerRoute);
app.use("/api/investor", InvestorRoute);
app.use("/api/produce", ProduceRoute);
app.use("/api/cart", CartRoute);
app.use("/api/admin", AdminRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is listening to ${PORT}`.blue.bold);
});
