const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const user = await client.users.fetch(args[0]);
    const guild = message.guild;
    const reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée.');
    user ? message.guild.member(user).kick(reason) : message.channel.send("<:SenkoThinking:735210310138331229> L'utilisateur n'existe pas.");

    if (guild.id == "527568704666599444") {
    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`)
        .setColor("#D29E00")
        .setDescription(`<:IconJoin:735207925370454066> **Action**: Kick\n<:ItemMagnifyingGlass:735207739587952682> **Raison**: ${reason}`)
        .setThumbnail(user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true}));

    client.channels.cache.get('699452457104834580').send(embed);
    }
    };

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;