const { MessageEmbed } = require('discord.js');
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
 
            const rando_imgs = [
            'https://cdn.weeb.sh/images/HJD-IJtw-.gif',
            'https://cdn.weeb.sh/images/HyeIU1YPb.gif',
            'https://media1.tenor.com/images/619a73f3f4f71c6fbe506005563c2df8/tenor.gif?itemid=11852536',
            'https://i.pinimg.com/originals/9c/fb/9c/9cfb9c08f59bf73e6ab3a8489f59e0d9.gif',
            'https://media1.tenor.com/images/ea2e6ec351e238d8e8bd624b3738a9b3/tenor.gif?itemid=14210719',
            'https://i.pinimg.com/originals/4c/2e/b6/4c2eb6be4a6cecd2537df77e722dcfc4.gif',
            'https://cutewallpaper.org/21/smug-face-anime/Smug-Anime-GIF-Smug-Anime-Face-Discover-and-Share-GIFs.gif',
            'https://steamuserimages-a.akamaihd.net/ugc/923667520405211366/A78582EDF025EE6C1B8563C3402315DEF506D9BF/',
            'https://thumbs.gfycat.com/SameAgitatedHatchetfish-size_restricted.gif',
            ]

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} fait un sourire moqueur`, message.author.displayAvatarURL({ format: 'png', dynamic: true}))
            .setColor(0x00C106)
            .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
            message.channel.send(embed); 
}

module.exports.help = MESSAGES.COMMANDS.COMPORTEMENT.SMUG;