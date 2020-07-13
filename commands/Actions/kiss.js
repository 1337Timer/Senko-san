const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

    if(message.mentions.users.size == 1) {
        let user = message.mentions.users.first()

            const rando_imgs = [
            'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
            'https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif',
            'https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
            'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
            'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
            'https://cdn.weeb.sh/images/rJeB2aOP-.gif',
            'https://cdn.weeb.sh/images/S1VEna_v-.gif',
            'https://cdn.weeb.sh/images/HJmunTOw-.gif',
            'https://cdn.weeb.sh/images/BkUJNec1M.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} a embrassé ${user.username}`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor(0xCC2E71)
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed);
    }
}

module.exports.help = MESSAGES.COMMANDS.ACTIONS.KISS;