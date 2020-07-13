const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const dog = await fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(json => json.message);

    const embed = new MessageEmbed()
    .setImage(dog)
    .setColor('7FE88D')
    
message.channel.send(embed);

    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.DOG;