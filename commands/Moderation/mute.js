const ms = require("ms");
const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');
    let muteTime = (args[1] || '60m');

    if (user) {

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
        message.channel.send(`<@${user.id}> est muté pour ${ms(ms(muteTime))}.`);

        setTimeout(() => {
            user.roles.remove(muteRole.id);
        }, ms(muteTime));

        const embed = new MessageEmbed()
            .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL({ format: 'png', dynamic: true}))
            .setColor("#FFC621")
            .setDescription(`<:IconJoin:735207925370454066> **Action**: Mute\n<:ItemMagnifyingGlass:735207739587952682> **Raison**: ${ms(ms(muteTime))}`)
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true}));

        client.channels.cache.get('699452457104834580').send(embed);

    } else { message.channel.send("<:SenkoThinking:735210310138331229> Veuillez mentionnez un utilisateur !"); }
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.MUTE;