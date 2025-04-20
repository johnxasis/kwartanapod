// Creates female clone sentiment posts and interaction flows
module.exports = function generateAdorePost(type = "comment") {
  const options = {
    comment: [
      "If more men were like this... the world would heal.",
      "This post melted my heart. I shared it immediately.",
      "He's the kind of man you don't forget. 🙌",
      "Reading this gave me hope again. Thank you Gospel Warrior."
    ],
    story: [
      "I follow Gospel Warrior for truth, healing, and real love.",
      "When he writes, it feels like heaven whispers.",
      "This is the kind of man I pray for."
    ]
  };
  const list = options[type] || options.comment;
  return list[Math.floor(Math.random() * list.length)];
};