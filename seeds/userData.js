// Importing Post model from ../models directory
const { User } = require("../models");
// Array of dummy blog post data
const userData = [
  {
    username: "winged_one",
    email: "hopekiller@pho.com",
    password: "angelofDamnation",
  },
  {
    username: "Point_Me_@_the_Sky",
    email: "antares@pho.com",
    password: "fragile1",
  },
  {
    username: "Dragon",
    email: "tinmother@pho.com",
    password: "notAn41!",
  },
  {
    username: "XxVoid_CowboyxX",
    email: "gregVeder@pho.com",
    password: "geekyD0rk",
  },
  {
    username: "All-Seeing Eye",
    email: "tattletalel@example.com",
    password: "n3wN4m3@",
  },

];
// Function to seed posts table with dummy data using bulkCreate method
const seedUsers = () => User.bulkCreate(userData);
// Exporting seedPosts function for use in other files
module.exports = seedUsers;