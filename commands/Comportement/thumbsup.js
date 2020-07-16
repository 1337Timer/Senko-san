const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    
            const rando_imgs = [
            'https://cdn.weeb.sh/images/r1jaukYD-.gif',
            'https://cdn.weeb.sh/images/SkF6dyYv-.gif',
            'https://cdn.weeb.sh/images/Skl5yYyKD-.gif',
            'https://cdn.weeb.sh/images/rku1FJKPW.gif',
            'https://cdn.weeb.sh/images/B1D1KkKD-.gif',
            'https://cdn.weeb.sh/images/B1YAu1Kv-.gif',
            'https://cdn.weeb.sh/images/HJuR_JYwW.gif',
            'https://media.tenor.com/images/e6561660fd1600c893c6f899678a9836/tenor.gif',
            'https://cdn.weeb.sh/images/SyXJKJYP-.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} lève le pouce`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor(0x00C106)
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed);
}

module.exports.help = MESSAGES.COMMANDS.COMPORTEMENT.THUMBSUP;