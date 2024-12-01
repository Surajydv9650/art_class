const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    // default: "Junior Learner (9-15 Years)",
  },
  description: {
    type: String,
    // default: "The Children are Ready to Learn these Things",
  },
  topics: [
    {
      type: [String],
      required: true,
      //   enum: [
      //     "Basics of pencil sketching and shading",
      //     "Basics of live object drawing",
      //     "Basics of watercolours and poster colours",
      //     "Still life drawing",
      //     "Composite drawing",
      //     "Styles of various art masters-art history",
      //     "Basics of glass paints, colour pencils, soft pastels",
      //     "Traditional Art, Mahbubani Art, etc.",
      //   ],
    },
  ],
  courseDuration: {
    type: String,
    required: true,
    // default: "1 Year",
  },
  numberOfSessions: {
    type: Number,
    required: true,
    default: 96,
  },
  price:{
    type:Number
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
