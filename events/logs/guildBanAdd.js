const { MessageEmbed } = require('discord.js');

module.exports = async (guild, message) => {

const fetchedLogs = await guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_BAN_ADD',
	});
	const banReason = fetchedLogs.entries.first().reason;
	const banLog = fetchedLogs.entries.first();

	if (!banLog) return console.log(`${user.tag} was banned from ${guild.name} but no audit log could be found.`);

	const { executor, target } = banLog;

	if (target.id === user.id) {
		client.channels.cache.get('699452457104834580').send(`${user.tag} à été banni de ${guild.name} par ${executor.tag} car ${banReason}`);
	} else {
		client.channels.cache.get('699452457104834580').send(`${user.tag} à été banni de ${guild.name}, mais on ne sait pas par qui.`);
	}
}
