const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

    if(message.mentions.users.size == 1) {
        let user = message.mentions.users.first()
            
            const rando_imgs = [
            'https://cdn.weeb.sh/images/HkutgeXob.gif',
            'https://cdn.weeb.sh/images/r1Vk-x7sZ.gif',
            'https://cdn.weeb.sh/images/S1FOllQj-.gif',
            'https://cdn.weeb.sh/images/rJAlbgXsb.gif',
            'https://cdn.weeb.sh/images/H1_Jbemjb.gif',
            'https://cdn.weeb.sh/images/ByWuR1q1M.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} a machouillé ${user.username}`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor('#F4AE42')
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed);
    } 
}

module.exports.help = MESSAGES.COMMANDS.ACTIONS.NOM;