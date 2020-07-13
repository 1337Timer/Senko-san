const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const memes = await fetch('https://www.reddit.com/r/memes/top/.json?sort=top&t=day&limit=500')
    .then(res => res.json())
    .then(json => json.data.children);

    const img = memes[Math.floor(Math.random() * memes.length)].data;

    const embed = new MessageEmbed()
    .setDescription(img.title)
    .setImage(img.url)
    .setColor("#74D7DD")
    
message.channel.send(embed);

    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.MEME;