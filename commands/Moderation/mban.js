const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

    if (message.author.id == "265924886461939712") {

        args.forEach(async id => {
            const user = await client.users.fetch(id);
            const member = message.guild.member(user);
            if (member.bannable) member.ban();
            else message.channel.send("<:SenkoThinking:735210310138331229> Je ne peux pas ban " + id);
            
            const embed = new MessageEmbed()
            .setAuthor(`${user.username} (${user.id})`)
            .setColor("#F05959")
            .setDescription(`<:IconJoin:735207925370454066> **Action**: Multi-ban`)
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL());

        client.channels.cache.get('735216964112482455').send(embed);
        })
    }
    else {
        message.channel.send("<:SenkoThinking:735210310138331229> <@265924886461939712> est le seul à pouvoir utiliser cette commande.")
    }
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.MBAN;