const express = require("express");

const router = require("./api/products/routes");
const connectDB = require("./database.js");
const app = express();

app.use(express.json());
app.use("/accounts", router);

const port = 8000;

connectDB();
app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});

//password is : Pv6RCZE1FVLmf5zW
