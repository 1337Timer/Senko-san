const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const newUsers = new Discord.Collection();
const ms = require("ms");

module.exports = async (client, member) => {
  
  const defaultChannel = client.channels.cache.get('709599127012638770');
  let JoinTime = '10s';
  newUsers.set(member.id, member.user);

  setInterval(() => {
    const userlist = newUsers.map(u => u.toString()).join(", ");
      let newMember = new MessageEmbed()
        .setTitle(`Bienvenue dans ${member.guild.name}`)
        .setColor('#F4AE42')
        .setDescription(`<a:Welcome1:719962451940212736><a:Welcome2:719962501948768337> Hey, je t'ai envoyé un MP contenant ce dont tu as besoin pour intégrer la meute ! <a:SenkoWelcome:732194291606093897>`)
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true}))
        .setFooter(`Nombre de membres : ${member.guild.memberCount}`);

      let newMembers = new MessageEmbed()
        .setTitle(`Bienvenue dans ${member.guild.name}`)
        .setColor('#F4AE42')
        .setDescription(`<a:Welcome1:719962451940212736><a:Welcome2:719962501948768337> Hey, on dirait que plusieurs personnes viennent d'arriver ! Je vous ai envoyé un MP contenant ce dont vous avez besoin pour intégrer la meute ! <a:SenkoWelcome:732194291606093897>`)
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true}))
        .setFooter(`Nombre de membres : ${member.guild.memberCount}`);
    
        newUsers.clear();

    if(userlist === 1) {
      defaultChannel.send(`${userlist}`, newMember);
    } 

    if(userlist >= 2) {
      defaultChannel.send(`${userlist}`, newMembers);
    }
  }, ms(JoinTime));

  let embed2 = new MessageEmbed()
    .setAuthor(`${member} (${member.id})`, member.user.displayAvatarURL({ format: 'png', dynamic: true}))
    .setColor('#2ECC71')
    .setFooter("Un utilisateur a rejoint")
    .setTimestamp();
    
    client.channels.cache.get('729389432612061316').send(embed2);
    
    let embed3 = new MessageEmbed()
    .setTitle(`Bienvenue dans ${member.guild.name}`)
    .setColor('#F4AE42')
    .setDescription(`<a:Welcome1:719962451940212736><a:Welcome2:719962501948768337> Bienvenue à toi sur le serveur ! Regarde bien les règles pour éviter de futures sanctions. \n \n **Pour accéder au serveur, clique sur la réaction <a:check:722493283850518598> en dessous des règles.**`)
    .setImage('https://i.ibb.co/h8Q9Nrp/19f3e47f-0794-4cc8-8d7d-eae48a850419-profile-banner-480.png')
    
    member.createDM().then(function(channel) {
        return channel.send(embed3)
    });
  
}