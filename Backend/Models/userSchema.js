const mongoose = require("mongoose");
// const { ModuleCacheMap } = require("vite/runtime");

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      default: null,
    },
    userEmail: {
      type: String,
      require: true,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    enrollmentData: {
      type: Object,
    },
    plan: {
      type: String,
      default: null,
    },
    otp: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("artClassUser", userSchema);
