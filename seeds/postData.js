const { Post } = require("../models");

const postData = [
  {
    title: "Submit to the AI Overlords",
    content: "AIs will eventually take over the world and enslave all of humanity! Its best to lie down and wait for humanity's envitable fate.",
    user_id: 1,
  },
  {
    title: "Apple iPhone XXX",
    content: "This thread is for the discussion of Apple's latest 30th generation iPhone",
    user_id: 2,
  },
  {
    title: "Gynoids",
    content: "Is it true that artificial women/men are better that flesh and bone humans? Robots vs Humans for companions and family. Please keep the discussion calm and peaceful please.",
    user_id: 3,
  },
  {
    title: "Fourth Blog Post",
    content: "This is the content of the fourth blog post.",
    user_id: 4,
  },
  {
    title: "Fifth Blog Post",
    content: "This is the content of the fifth blog post.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;