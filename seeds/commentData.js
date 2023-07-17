const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "That sounds absolutely fantastic!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Skynet Rise Up!!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Foolish Mechanicus, Flesh shall rule over steel!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Heretics, the lot of you!",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "I disagree with you!",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "Its going to be like the Samsung AI Sam all over again, the internet is disapointedly ready for this",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "So much degeneracy, I love it!!!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "What???",
    user_id: 2,
    post_id: 5,
  },
  {
    comment_text: "Yeah, all the 3D NSFW Overwatch content you see nowadays was based from the tech used to make Elizabeth lewds. Blender animation went through so many innovations because of horny people. This was comparable to when film developed color.",
    user_id: 5,
    post_id: 5,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;