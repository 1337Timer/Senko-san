const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const user = await client.users.fetch(args[0]);
    if(!user) return message.reply("<:SenkoThinking:735210310138331229> L'utilisateur n'existe pas.");
    const guild = message.guild;
    message.guild.members.unban(user);
    
    if (guild.id == "527568704666599444") {
        const embed = new MessageEmbed()
            .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
            .setColor("#F05959")
            .setDescription(`**<:IconJoin:735207925370454066> Action**: Unban`)
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true}));

        client.channels.cache.get('699452457104834580').send(embed);
    }
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNBAN;