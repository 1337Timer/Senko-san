const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

     const rando_imgs = [
            'https://media1.tenor.com/images/e8a39c41b8e2eacdf0fd4b5889a5f323/tenor.gif?itemid=14184404',
            'https://i.pinimg.com/originals/b7/e1/32/b7e132fd3f4e110ea54ef8aa8f4eebbe.gif',
            'https://i.pinimg.com/originals/27/16/68/271668b1037633d7f7ae63dc1a1c29f2.gif',
            'https://qph.fs.quoracdn.net/main-qimg-f9d97b1ad597482051a4235e9e3d4e7b',
            'https://media.tenor.com/images/0f5d12aa3dfa6d8fd9e8a41bc51ec421/tenor.gif',
            'https://cdn.weeb.sh/images/BkdB9PuLz.gif',
            'https://cdn.weeb.sh/images/BynnlkYP-.gif',
            'https://cdn.weeb.sh/images/B10og1FPb.gif',
            'https://cdn.weeb.sh/images/S1vFlkYwW.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} est gênée`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor(0x00C106)
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed);
}

module.exports.help = MESSAGES.COMMANDS.COMPORTEMENT.POUT;