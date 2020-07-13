const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {

    if(message.mentions.users.size == 0) {

        const embed = new MessageEmbed()
                .setImage(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .setColor('#F4AE42')
                message.channel.send(embed);
    }

    if(message.mentions.users.size == 1) {
        let user = message.mentions.users.first()

        const embed = new MessageEmbed()
                .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .setColor('#F4AE42')
                message.channel.send(embed);
    }

    if(message.mentions.users.size == 2) {
        message.channel.send("<:SenkoThinking:732192434137727057> Mentionnez un utilisateur à la fois.")
    }
            
}

module.exports.help = MESSAGES.COMMANDS.AUTRE.AVATAR;