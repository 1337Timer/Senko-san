const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const fox = await fetch('http://randomfox.ca/floof/')
    .then(res => res.json())
    .then(json => json.image);

    const embed = new MessageEmbed()
    .setImage(fox)
    .setColor('#F38C26')
    
message.channel.send(embed);

    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.ANIMAUX.FOX;