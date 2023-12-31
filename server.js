const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const AccountModel = require("./models/accounts");
const DanhmucModel = require("./models/catelogys");
const SanphamModel = require("./models/products");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var accountRouter = require("./routers/catelogys");
app.use("/api/account/", accountRouter);

var danhmuctRouter = require("./routers/catelogys");
app.use("/api/danhmuc/", danhmuctRouter);

var sanphamRouter = require("./routers/products");
const { connections } = require("mongoose");
app.use("/api/product/", sanphamRouter);

app.get("/", (req, res, next) => {
  res.json("HOME");
});

app.listen(5000, () => {
  console.log(`Server started on port`);
});
