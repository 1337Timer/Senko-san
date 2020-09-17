const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    // Roles
    const r6Role = message.guild.roles.cache.get("756251153335058444");
    const AURole = message.guild.roles.cache.get("756251398072696943");
    const CSRole = message.guild.roles.cache.get("756251290786332692");
    // Emojis
    const r6Emoji = message.guild.emojis.cache.get("🔫");
    const AUEmoji = message.guild.emojis.cache.get("🤫");
    const CSEmoji = message.guild.emojis.cache.get("💣");

    const embed = new MessageEmbed()
    .setTitle('Jeux')
    .setDescription("Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant")
    .setColor('#3EAAF5')
    .addField(
        "Rôles disponibles :",
        `
        ${r6Emoji} - ${r6Role.toString()}
        ${AUEmoji} - ${AURole.toString()}
        ${CSEmoji} - ${CSRole.toString()}
        `
    );

    message.channel.send(embed).then(async msg => {
        await msg.react(r6Emoji);
        await msg.react(AUEmoji);
        await msg.react(CSEmoji);
        await msg.delete({ timeout: 15000 })
    })

    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.REACTIONS.JEUX;