const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const cat = await fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(json => json[0].url);

    const embed = new MessageEmbed()
    .setImage(cat)
    .setColor("#FCCF95")
    
message.channel.send(embed);

    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.IMAGES.CAT;