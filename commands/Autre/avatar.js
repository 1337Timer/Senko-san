const Discord = require('discord.js');
module.exports.run = async (client, message, arcs) => {

    if(message.mentions.users.size == 0) {

        const embed = new Discord.MessageEmbed()
                .setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .setColor(0x2ECC71)
                message.channel.send(embed);
    }

    if(message.mentions.users.size == 1) {
        let user = message.mentions.users.first()

        const embed = new Discord.MessageEmbed()
                .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .setColor(0x2ECC71)
                message.channel.send(embed);
    }

    if(message.mentions.users.size == 2) {
        message.channel.send("<a:leclumStudy:717355862892740618> Mentionnez un utilisateur à la fois.")
    }
            
}

module.exports.help = {
    name: "avatar",
    aliases: ["a"]
}