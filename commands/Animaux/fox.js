const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const fox = await fetch('https://some-random-api.ml/img/fox')
    .then(res => res.json())
    .then(json => json.link);

    const embed = new MessageEmbed()
    .setImage(fox)
    .setColor('#F38C26')
    
message.channel.send(embed);

    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.ANIMAUX.FOX;