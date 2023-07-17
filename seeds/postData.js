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
    title: "Console vs PC",
    content: "Let me be completely honest, its PC MasterRace all the way, but I kinda just want to see y'all rage over this.",
    user_id: 4,
  },
  {
    title: "Thank You 2k for making BioShock Infinite",
    content: "This thread is a dedicated thanks you for the creation of Bioshock Infinite, whose legacy is several breakthoughs in 3D animations. Without this game's main character, Elizabeth, and all the horny degerate netizens wanting to make lewd videos of her, we would not have the amazing 3d animation and rendering technology and programs of today.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;