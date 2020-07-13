const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

    if(message.mentions.users.size == 1) {
        let user = message.mentions.users.first()

            const rando_imgs = [
            'https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif',
            'https://media.giphy.com/media/osYdfUptPqV0s/giphy.gif',
            'https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif',
            'https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif',
            'https://media.giphy.com/media/4HP0ddZnNVvKU/giphy.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} a tapoté ${user.username}`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor(0x2E71CC)
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed);
    }
}    

module.exports.help = MESSAGES.COMMANDS.ACTIONS.PAT;