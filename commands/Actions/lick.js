const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

    if(message.mentions.users.size == 1) {
        let user = message.mentions.users.first()
            
            const rando_imgs = [
            'https://cdn.weeb.sh/images/Bkxge0uPW.gif',
            'https://cdn.weeb.sh/images/rktygCOD-.gif',
            'https://cdn.weeb.sh/images/S1QzRJp7z.gif',
            'https://cdn.weeb.sh/images/ryGpGsnAZ.gif',
            'https://cdn.weeb.sh/images/BkvTBQHaZ.gif',
            'https://cdn.weeb.sh/images/HJRRyAuP-.gif',
            'https://cdn.weeb.sh/images/Sk15iVlOf.gif',
            'https://cdn.weeb.sh/images/Sk7xeAdwb.gif',
            'https://cdn.weeb.sh/images/Syg8gx0OP-.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} a léché ${user.username}`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor(0x00C106)
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed);
    } 
}

module.exports.help = MESSAGES.COMMANDS.ACTIONS.LICK;