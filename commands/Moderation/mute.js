const ms = require("ms");
const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
    let muteTime = (args[1] || '60s');

    if (!muteRole) {
        muteRole = await message.guild.roles.create({
            data: {
                name: 'muted',
                color: '#111111',
                permissions: []
            }
        })

        message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.updateOverwrite(muteRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false,
                CONNECT: false
            });
        });
    }

    await user.roles.add(muteRole.id);
    message.channel.send(`<a:senkoEars:732199112820260875> <@${user.id}> est muté pour ${ms(ms(muteTime))}.`);

    setTimeout(() => {
        user.roles.remove(muteRole.id);
    }, ms(muteTime));

    const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
        .setColor("#FFC621")
        .setDescription(`**<:IconJoin:731919767425777806>Action**: Mute\n<:ItemMagnifyingGlass:732197467759706132> **Raison**: ${ms(ms(muteTime))}`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('699452457104834580').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.MUTE;