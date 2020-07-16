const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
       
            const rando_imgs = [
            'https://thumbs.gfycat.com/CraftyFatGrasshopper-size_restricted.gif',
            'https://thumbs.gfycat.com/OnlyCornyChickadee-size_restricted.gif',
            'https://thumbs.gfycat.com/AcidicSecondhandBanteng-small.gif',
            'https://i.imgur.com/OgHPg.gif',
            'https://media1.tenor.com/images/018697abf2dd59ad66467d2c0245bf1d/tenor.gif?itemid=16340766',
            'https://thumbs.gfycat.com/LongAchingAcornbarnacle-size_restricted.gif',
            'https://media1.tenor.com/images/ea8977dd6dc918c2d0fc253d714105f4/tenor.gif?itemid=10750489',
            'https://lh3.googleusercontent.com/proxy/xuIWwHWy_0lY8xu8l_EqNm6gaImT0SIDLQBmuTGCPXI2osWumHLIexan11xHnRxZB8-ybzX1DJ5HiL9D6b7XESfnJP2C--ChzhyQKFXcwEM',
            'https://pa1.narvii.com/5688/b3dd4d78a227323ed6ef0811f6cc8757e3a4bb84_00.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} rougit`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor('#F4AE42')
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed);
}

module.exports.help = MESSAGES.COMMANDS.COMPORTEMENT.BLUSH;