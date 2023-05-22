const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    image: { type: String, required: false },
    password: { type: String, required: true },
    userType: { type: String, enum: ["admin", "teacher", "student"], required: true },
    package: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;
