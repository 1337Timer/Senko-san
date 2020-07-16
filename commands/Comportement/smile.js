const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {

            const rando_imgs = [
            'https://i.ibb.co/F4YkKSZ/created-by-2.gif',
            'https://media.tenor.com/images/d8cfad6474c16477362df878df5aba70/tenor.gif',
            'https://media1.tenor.com/images/492458b6b07d19f6ccb1f15f2931b121/tenor.gif?itemid=17500641',
            'https://media1.tenor.com/images/5ca5416c427103f8c5a040ad142327d2/tenor.gif?itemid=15218042',
            'https://thumbs.gfycat.com/GrimMealyBuckeyebutterfly-size_restricted.gif',
            'https://media1.tenor.com/images/c49dc9422aac61eebbf8ae9d42bb26b7/tenor.gif?itemid=15792815',
            'https://pa1.narvii.com/6534/88e78324a0722f8d3821063c1cce7690398bf7be_hq.gif',
            'https://pa1.narvii.com/6695/5b511d6d997db831d17c1a09b2534e29f6f1f1cb_hq.gif',
            'https://pa1.narvii.com/6514/ccbcc129fd25834e628fc1e6b1ee362866f885b3_hq.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} sourit`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor('#F4AE42')
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed); 
}

module.exports.help = MESSAGES.COMMANDS.COMPORTEMENT.SMILE;