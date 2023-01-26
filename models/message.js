const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema)