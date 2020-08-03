const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
    //const server = client.channels.cache.get('527568704666599444');
    const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
        limit: 1,
        type: 'MESSAGE_DELETE'
    });

    //if (server) {
        
    const embed = new MessageEmbed()
    .setAuthor("Message supprimé")
    .setColor("#DD5F53")
    .setDescription(`<:IconJoin:735207925370454066> **Message** :\n ${message.content}\n**<:Membres:735207906420588645> Auteur du message** : \n${message.author}`)
    .setTimestamp()

    client.channels.cache.get('699458377381838878').send(embed);

    //}
}