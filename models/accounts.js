const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Shoponline-api-nodejs");

const Schema = mongoose.Schema;

const AccountSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    collection: "account",
  }
);

const AccountModel = mongoose.model("account", AccountSchema);
module.exports = AccountModel;
