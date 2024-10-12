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
    plan: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("artClassUser", userSchema);
