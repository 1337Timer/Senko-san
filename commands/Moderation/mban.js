const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

    if (message.author.id !== "265924886461939712") return;

    args.forEach(async id => {
        const user = await client.users.fetch(id);
        const member = message.guild.member(user);
        if (member.bannable) member.ban();
        else message.channel.send("<:SenkoThinking:735210310138331229> Je ne peux pas ban " + id);
        
        const embed = new MessageEmbed()
        .setColor("#F05959")
        .setDescription(`<:IconJoin:735207925370454066> **Action**: Multi-ban\n${user.username} (${user.id})`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('729389432612061316').send(embed);
    })
 
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.MBAN;