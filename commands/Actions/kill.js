const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, arcs) => {

    if(message.mentions.users.size == 1) {
        let user = message.mentions.users.first()

            const rando_imgs = [
            'https://media.giphy.com/media/c7JOb3Dgabjhe/giphy.gif',
            'https://cdn.weeb.sh/images/BJO2j1Fv-.gif',
            'https://cdn.weeb.sh/images/B1qosktwb.gif',
            'https://cdn.weeb.sh/images/HyXTiyKw-.gif',
            'https://cdn.weeb.sh/images/B1VnoJFDZ.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} a tué ${user.username}`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor('#F4AE42')
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed);
    }
}    

module.exports.help = MESSAGES.COMMANDS.ACTIONS.KILL;