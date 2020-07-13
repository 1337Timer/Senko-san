const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

    if(message.mentions.users.size == 1) {
        let user = message.mentions.users.first()
            
            const rando_imgs = [
            'https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif',
            'https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif',
            'https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif',
            'https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif',
            'https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif',
            'https://cdn.weeb.sh/images/rkIK_u7Pb.gif',
            'https://cdn.weeb.sh/images/HJU2OdmwW.gif',
            'https://cdn.weeb.sh/images/ry6o__7D-.gif',
            'https://cdn.weeb.sh/images/r1R3_d7v-.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} a fait un calin à ${user.username} <a:SenkoExcited:732258990754627634>`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor(0x00C106)
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed);
    } 
}

module.exports.help = MESSAGES.COMMANDS.ACTIONS.HUG;