const mongoose = require("mongoose");
// const { ModuleCacheMap } = require("vite/runtime");

const contactSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      default: null,
    },
    userEmail: {
      type: String,
      require: true,
      default: null,
    },
    userNumber: {
      type: Number,
      require: true,
      //   default: 0,
    },
    userMessage: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", contactSchema);
