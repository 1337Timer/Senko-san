const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

    if(message.mentions.users.size == 1) {
        let user = message.mentions.users.first()
            
            const rando_imgs = [
            'https://cdn.weeb.sh/images/HkUlIUXDZ.gif',
            'https://cdn.weeb.sh/images/SyZk8U7vb.gif',
            'https://cdn.weeb.sh/images/B1SzeshCW.gif',
            'https://cdn.weeb.sh/images/BkNe8LQPW.gif',
            'https://cdn.weeb.sh/images/H1SfI8XwW.gif',
            'https://cdn.weeb.sh/images/B1Qb88XvW.gif',
            'https://cdn.weeb.sh/images/B1S1I87vZ.gif',
            'https://cdn.weeb.sh/images/By03IkXsZ.gif',
            'https://cdn.weeb.sh/images/BJseUI7wb.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} a fait un calin à ${user.username}`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor('#F4AE42')
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed);
    } 
}

module.exports.help = MESSAGES.COMMANDS.ACTIONS.CUDDLE;