const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
    const server = message.guild.id;
    
    if (server == "527568704666599444") {
        if(message.author.bot) return;
        
    const embed = new MessageEmbed()
    .setTitle(`Message supprimé dans ${message.channel}`)
    .setColor("#DD5F53")
    .setDescription(`<:IconJoin:735207925370454066> **Message** :\n ${message.content}\n**<:Membres:735207906420588645> Auteur du message** : \n${message.author}`)
    .setTimestamp()

    client.channels.cache.get('699458377381838878').send(embed);
    }
}