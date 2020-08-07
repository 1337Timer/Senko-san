module.exports = client => {
    console.log(`✔️  Connecté en tant que ${client.user.username} !`);
    let guild = client.guilds.find(guild => guild.name === "La meute G9");
    
    let activities = ['s!help', `${guild.memberCount} membres`], i = 0;

    setInterval(() => client.user.setPresence({ activity:{ name: `${activities[i++ % activities.length]}`, type: 'WATCHING'}, status: 'online'}), 5000);
}