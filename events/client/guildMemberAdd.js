const { MessageEmbed } = require("discord.js");

module.exports = async (client, member) => {

    let embed1 = new MessageEmbed()
    .setTitle(`Bienvenue dans ${member.guild.name}`)
    .setColor(0x2ECC71)
    .setDescription(`<a:Welcome1:719962451940212736><a:Welcome2:719962501948768337> Hey ${member}, je t'ai envoyé un MP contenant tout ce dont tu as besoin pour intégrer la meute ! <:x9umihAmour:708811197906026587>`)
    .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true}))
    .setFooter(`Nombre de membres : ${member.guild.memberCount}`);
    
    client.channels.cache.get('709599127012638770').send(embed1);

    let embed2 = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor('#2ECC71')
    .setFooter("Un utilisateur a rejoint")
    .setTimestamp();
    
    client.channels.cache.get('729389432612061316').send(embed2);
    
    let embed3 = new MessageEmbed()
    .setTitle(`Bienvenue dans ${member.guild.name}`)
    .setColor('#2ECC71')
    .setDescription(`<a:Welcome1:719962451940212736><a:Welcome2:719962501948768337> Bienvenue à toi sur le serveur ! Regarde bien les règles pour éviter de futures sanctions. \n \n **Pour accéder au serveur, clique sur la réaction <a:check:722493283850518598> en dessous des règles.**`)
    .setImage('https://i.ibb.co/h8Q9Nrp/19f3e47f-0794-4cc8-8d7d-eae48a850419-profile-banner-480.png')
    
    member.createDM().then(function(channel) {
        return channel.send(embed3)
    });
}
