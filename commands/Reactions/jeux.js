const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    const r6Role = message.guild.roles.cache.get("729788722333352028");
    const gtaRole = message.guild.roles.cache.get("729794048524550277");
    const r6Emoji = message.guild.emojis.cache.get("731924620889817170");
    const gtaEmoji = message.guild.emojis.cache.get("731924579802415195");

    const embed = new MessageEmbed()
    .setTitle('Jeux')
    .setDescription("Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant")
    .setColor('#3EAAF5')
    .addField(
        "Rôles disponibles :",
        `
        ${r6Emoji} - ${r6Role.toString()}
        ${gtaEmoji} - ${gtaRole.toString()}
        `
    );

    message.channel.send(embed).then(async msg => {
        await msg.react(r6Emoji);
        await msg.react(gtaEmoji);
        await msg.delete({ timeout: 15000 })
    })

    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.REACTIONS.JEUX;