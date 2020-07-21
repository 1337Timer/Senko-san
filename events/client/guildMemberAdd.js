const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const newUsers = new Discord.Collection();
const ms = require("ms");
const { createCanvas, loadImage, registerFont } = require('canvas');
registerFont(__dirname + '/Uni Sans Heavy.otf', { family: 'Uni Sans Heavy', weight: 'normal' });

module.exports = async (client, member) => {
  
  const channel = client.channels.cache.get('679052698150240257');
  const canvas = createCanvas(1024, 450);
  const ctx = canvas.getContext("2d");

  const background = await loadImage("./image.jpg");
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  // Ligne
  ctx.beginPath();
      // Bas
      ctx.moveTo(323, 325);
      ctx.lineTo(780, 325);
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // 1er Haut
      ctx.beginPath();
      ctx.moveTo(322.5, 125);
      ctx.lineTo(700, 125);
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      
      // Gauche 
      ctx.beginPath();
      ctx.moveTo(325, 125);
      ctx.lineTo(325, 310);
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

  // Bienvenue
  ctx.font = `45px Uni Sans Heavy`;
	ctx.fillStyle = '#ffffff';
  ctx.fillText("BIENVENUE", 340, 180);

  // Pseudo de la personne
  ctx.font = `60px Uni Sans Heavy`;
	ctx.fillStyle = '#D30007';
  ctx.fillText(member.displayName, 340, 245);

  // Bienvenue
  ctx.font = `45px Uni Sans Heavy`;
	ctx.fillStyle = '#ffffff';
  ctx.fillText("DANS LA MEUTE !", 340, 300);

  // Position et taille de l'image
  const avatar = await loadImage(member.user.displayAvatarURL({ format: 'png' }));
  ctx.drawImage(avatar, 80, 124.5, 205, 205);
  
  const attachment = new Discord.MessageAttachment(
  canvas.toBuffer(),
  "welcome-image.png"
  );

  channel.send(attachment);

  const defaultChannel = client.channels.cache.get('639112437286567937');

  let JoinTime = '5m';
  newUsers.set(member.id, member.user);

  setInterval(() => {
    const userlist = newUsers.map(u => u.toString()).join(", ");
      let embed1 = new MessageEmbed()
        .setTitle(`Bienvenue dans ${member.guild.name}`)
        .setColor('#F4AE42')
        .setDescription(`<a:Welcome1:735208586245832785><a:Welcome2:735208578092236942> Hey, je vous ai envoyé un MP contenant ce dont vous avez besoin pour intégrer la meute ! <a:SenkoWelcome:735208674695577660>`)
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true}))
        .setFooter(`Nombre de membres : ${member.guild.memberCount}`);
    newUsers.clear();

    if(userlist) {
      defaultChannel.send(`${userlist}`, embed1);
    } else {
      return;
    }
  }, ms(JoinTime));

  let embed2 = new MessageEmbed()
    .setAuthor(`${member} (${member.id})`, member.user.displayAvatarURL({ format: 'png', dynamic: true}))
    .setColor('#2ECC71')
    .setFooter("Un utilisateur a rejoint")
    .setTimestamp();
    
    client.channels.cache.get('699450511400763423').send(embed2);
    
    let embed3 = new MessageEmbed()
    .setTitle(`Bienvenue dans ${member.guild.name}`)
    .setColor('#F4AE42')
    .setDescription(`<a:Welcome1:735208586245832785><a:Welcome2:735208578092236942> Bienvenue à toi sur le serveur ! Regarde bien les règles pour éviter de futures sanctions. \n \n **Pour accéder au serveur, clique sur la réaction <a:check:735208031817695284> en dessous des règles.**`)
    .setImage('https://i.ibb.co/h8Q9Nrp/19f3e47f-0794-4cc8-8d7d-eae48a850419-profile-banner-480.png')
    
    member.createDM().then(function(channel) {
        return channel.send(embed3)
    });
  
}