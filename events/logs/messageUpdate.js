const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
    
    if (message.author.bot) return;
        
    if (message.guild.id == "527568704666599444") {
        const embed = new MessageEmbed()
        .setTitle(`Message supprimé dans ${message.channel.name}`)
        .setColor("#DD5F53")
        .setDescription(`<:IconJoin:735207925370454066> **Message** : ${message.content}\n**<:Membres:735207906420588645> Auteur du message** : ${message.author}`)
        .setTimestamp()

        client.channels.cache.get('699458377381838878').send(embed);
    }
}