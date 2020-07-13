const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {
    message.guild.members.fetch().then(fetchAll => {
        const online = fetchAll.filter(m => m.presence.status === 'online');
        const iddle = fetchAll.filter(m => m.presence.status === 'iddle');
        const dnd = fetchAll.filter(m => m.presence.status === 'dnd');
        const offline = fetchAll.filter(m => m.presence.status === 'offline');
    
    const embed = new MessageEmbed()
    .setColor("#39A7F3")
    .addField(`<:IconStatusOnline:732277309326884935> En ligne`, `${online.size} membres`)
    .addField(`<:IconStatusIdle:732277451664916531> Inactif(s)`, `${iddle.size} membres`)
    .addField(`<:IconStatusDND:732277463228350547> Ne pas déranger`, `${dnd.size} membres`)
    .addField(`<:IconStatusOffline:732277473596932167> Invisible`, `${offline.size} membres`)
    message.channel.send(embed);

    message.delete();
    })
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.ACTIVITY;