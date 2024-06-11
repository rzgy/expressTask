const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./api/products/routes");
const connectDB = require("./database.js");
const notFound = require("./middleWares/notFoundHandler.js");
const errorHandler = require("./middleWares/errorHandler.js");
const app = express();
const path = require("path");

app.use(express.json());

app.use(morgan("dev"));
app.use(cors());
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/accounts", router);

app.use(notFound);
app.use(errorHandler);

const port = 8000;

connectDB();
app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});

//password is : Pv6RCZE1FVLmf5zW
