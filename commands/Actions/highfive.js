const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

    if(message.mentions.users.size == 1) {
        let user = message.mentions.users.first()
            
            const rando_imgs = [
            'https://cdn.weeb.sh/images/S1kKq1XiZ.gif',
            'https://cdn.weeb.sh/images/ByRqqy7jb.gif',
            'https://cdn.weeb.sh/images/Hy_U1QBT-.gif',
            'https://cdn.weeb.sh/images/HkYzKyXjW.gif',
            'https://cdn.weeb.sh/images/B1-7KkQsZ.gif',
            'https://cdn.weeb.sh/images/rJenY1XsW.gif',
            'https://cdn.weeb.sh/images/r1MMK1msb.gif',
            'https://cdn.weeb.sh/images/HysYckQs-.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} a fait un high-five avec ${user.username}`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor(0x00C106)
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed);
    } 
}

module.exports.help = MESSAGES.COMMANDS.ACTIONS.HIGHFIVE;