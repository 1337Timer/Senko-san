const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

    if(message.mentions.users.size == 1) {
        let user = message.mentions.users.first()
            
            const rando_imgs = [
            'https://cdn.weeb.sh/images/rkpAXa5bG.gif',
            'https://cdn.weeb.sh/images/BkzyEktv-.gif',
            'https://cdn.weeb.sh/images/r1dc7yFvZ.gif',
            'https://cdn.weeb.sh/images/HkJ6-e91z.gif',
            'https://cdn.weeb.sh/images/ry2tWxcyf.gif',
            'https://cdn.weeb.sh/images/SkNimyKvZ.gif',
            'https://cdn.weeb.sh/images/HJKiX1tPW.gif',
            'https://cdn.weeb.sh/images/SkZTQkKPZ.gif',
            'https://cdn.weeb.sh/images/r1VF-lcyz.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} a giflé ${user.username}`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor(0x00C106)
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed);
    } 
}

module.exports.help = MESSAGES.COMMANDS.ACTIONS.SLAP;