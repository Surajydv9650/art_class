const bcrypt = require("bcrypt");

const hashPassword = async (pass) => {
  console.log(pass,'PASS')
  const hashedPass = await bcrypt.hash(pass, 5);
  return hashedPass;
};

const comparePassword = async (pass, hashedPass) => {
  console.log(pass,hashedPass);
  
  const isPassworrd = await bcrypt.compare(pass, hashedPass);
  return isPassworrd;
};

module.exports = { hashPassword, comparePassword };
