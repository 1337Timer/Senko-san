const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const user = message.guild.member(message.mentions.users.first());
    const guild = message.guild;
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

    if (user) {

    if (!user.roles.cache.has(muteRole.id)) return message.reply("<:SenkoThinking:735210310138331229> L'utilisateur mentionné n'est pas muté.")
    user.roles.remove(muteRole.id);
    message.channel.send(`<@${user.id}> n'est plus muté.`);
    
    if (guild.id == "527568704666599444") {

        const embed = new MessageEmbed()
            .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL({ format: 'png', dynamic: true}))
            .setColor("#FFC621")
            .setDescription(`**<:IconJoin:735207925370454066> Action**: Unmute`)
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true}));

        client.channels.cache.get('699452457104834580').send(embed);

        } else { message.channel.send("<:SenkoThinking:735210310138331229> Veuillez mentionnez un utilisateur !"); }
    }
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTE;