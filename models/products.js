const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Shoponline-api-nodejs");
const Schema = mongoose.Schema;

const SanphamSchema = new Schema(
  {
    tensanpham: {
      type: String,
      require: true,
      unique: true,
    },
    dongia: {
      type: Number,
      require: true,
    },
    mota: {
      type: String,
      require: true,
    },
    soluong: {
      type: Number,
      require: true,
    },
    anhdaidien: {
      type: String,
      require: true,
    },
    danhmuc_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "catelogys",
    },
  },
  {
    conllection: "products",
    versionKey: false,
  }
);
const SanphamModel = mongoose.model("products", SanphamSchema);
module.exports = SanphamModel;
