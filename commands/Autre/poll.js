const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {   
        
const embed = new MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setColor('#F4AE42')
.setDescription(args.join(" "))
.setTimestamp()

const poll = await message.channel.send(embed);
await poll.react("731889448362442785");
await poll.react("731889457992695828");

message.delete();
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.POLL;