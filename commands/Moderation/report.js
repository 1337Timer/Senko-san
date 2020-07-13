const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

const isFirstCharNumeric = c => /\d/.test(c);

module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    let raison = args[1];

    if(!raison) return message.reply("Indiquez une raison")

    const embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setThumbnail(user.displayAvatarURL())
    .addFields(
        { name: "Coupable", value: user.username, inline: true },
        { name: "Liens du message", value: isFirstCharNumeric(raison.charAt(0)) ? `[Clique ici](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${args[1]})` : 'Aucun lien précisé', inline: true},
        { name: "Raison", value: isFirstCharNumeric(raison.charAt(0)) ? args.slice(args.indexOf(args[2])).join(" ") : args.slice(args.indexOf(args[1])).join(" ") }
    )
    .setTimestamp()

    client.channels.cache.get('729389432612061316').send(embed);
    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.REPORT;