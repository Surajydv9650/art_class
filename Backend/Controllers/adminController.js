const Courses = require("../Models/courseSchema");
const Users = require("../Models/userSchema")
module.exports.addCourse = async (req, res) => {
  const newCourse = await Courses.create(req.body);
  return res.status(201).send({ message: "New Course Added", newCourse });
};

module.exports.getCourse = async (req, res) => {
  const CoursesData = await Courses.find();
  return res.status(201).send({ message: "New Course Added", CoursesData });
};

module.exports.getUsers = async (req, res) => {
  const UsersData = await Users.find();
  // console.log(UsersData)
  if (!UsersData) return res.status(401).send({ message: "No Users Found!" })
  return res.status(200).send({ message: "Users Fetched Successfully!", data: UsersData })
}

module.exports.deleteUsers = async (req, res) => {
  const { id } = req.params;
   await Users.findByIdAndDelete(id);
const users = await Users.find()
  console.log(users)
  return res.status(200).send({ message: "Deleted Successfully!", data: users })
}