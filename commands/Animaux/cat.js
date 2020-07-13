const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch")
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const cat = await fetch('http://aws.random.cat/meow')
    .then(res => res.json())
    .then(json => json.file);

    const embed = new MessageEmbed()
    .setImage(cat)
    .setColor("#FCCF95")
    
message.channel.send(embed);

    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.ANIMAUX.CAT;