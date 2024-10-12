const contactSchema = require("../Models/contactSchema");
const User = require("../Models/userSchema");
const { hashPassword, comparePassword } = require("../utils/bcryptConfig");
const sendMail = require("../utils/sendEmail");

module.exports.addUser = async (req, res) => {
  const { password } = req.body;
  try {
    const newUser = await User.create({
      ...req.body,
      password: await hashPassword(password),
    });
    return res
      .status(201)
      .send({ message: `Welcome ${req.body.fullName} !`, newUser });
  } catch (err) {
    console.log(err);
  }
};

module.exports.authUser = async (req, res) => {
  const { userEmail, password } = req.body;
  console.log(userEmail, password);
  try {
    const foundUser = await User.findOne({ userEmail: userEmail });
    // console.log(foundUser,password);

    if (await comparePassword(password, foundUser?.password)) {
      return res
        .status(200)
        .send({ message: `Welcome ${foundUser.fullName} !`, foundUser });
    } else {
      return res.status(401).send({ message: "User Not Found!" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.addContact = async (req, res) => {
  const { userName, userEmail, userMessage, userNumber } = req.body;
  const newContact = await contactSchema.create(req.body);
  await sendMail(userName, userEmail, userNumber, userMessage);
  return res.status(201).send({ message: "Query Sent!" });
};
