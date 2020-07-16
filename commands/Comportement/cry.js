const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

            const rando_imgs = [
            'https://thumbs.gfycat.com/BoilingEnergeticGosling-size_restricted.gif',
            'https://i.pinimg.com/originals/9d/cb/2b/9dcb2b83c29e6c70b4971e718cabe958.gif',
            'https://i.kym-cdn.com/photos/images/original/001/324/734/0f3.gif',
            'https://i0.wp.com/drunkenanimeblog.com/wp-content/uploads/2018/04/tears.gif?fit=400%2C225&ssl=1',
            'https://steamuserimages-a.akamaihd.net/ugc/853849476182679277/2BF9D69D34EFE20A22E5ECB6EE972069D496D2DF/',
            'https://i.imgur.com/PNryiuF.gif',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6XxYRgG0xuMlhgzuQVmP3lid_qW3FvKHFiw&usqp=CAU',
            'https://66.media.tumblr.com/63cf51ac306ee3c077acc5729b7b9b33/tumblr_nvq8s8dAyV1tjszhdo1_500.gifv',
            'https://i.pinimg.com/originals/59/4e/af/594eaf0952fe40587118f7d3b70bc666.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} pleure`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor(0x00C106)
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed);
}

module.exports.help = MESSAGES.COMMANDS.COMPORTEMENT.CRY;