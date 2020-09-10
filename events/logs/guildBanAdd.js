const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
        
    const embed = new MessageEmbed()
          .setAuthor(`${user.username} (${user.id})`)
          .setColor("#F05959")
          .setDescription(`<:IconJoin:735207925370454066> **Action**: Ban\n<:ItemMagnifyingGlass:735207739587952682> **Raison**: ${reason}`)
          .setThumbnail(user.avatarURL())
          .setTimestamp()
          .setFooter(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true}));

    client.channels.cache.get('699452457104834580').send(embed);
}

const fetchedLogs = await guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_BAN_ADD',
	});
	const banReason = fetchedLogs.entries.first().reason;
	const banLog = fetchedLogs.entries.first();

	if (!banLog) return console.log(`${user.tag} was banned from ${guild.name} but no audit log could be found.`);

	const { executor, target } = banLog;

	if (target.id === user.id) {
		message.send(`${user.tag} à été banni de ${guild.name} par ${executor.tag} car ${banReason}`);
	} else {
		console.log(`${user.tag} à été banni de ${guild.name}, mais on ne sait pas par qui.`);
	}
