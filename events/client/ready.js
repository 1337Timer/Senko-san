module.exports = client => {
    console.log(`✔️  Connecté en tant que ${client.user.username} !`);
    const guild = client.guilds.cache.get("527568704666599444");
    
    let activities = [`${guild.memberCount} membres`], i = 0;

    setInterval(() => client.user.setPresence({ activity:{ name: `${activities[i++ % activities.length]}`, type: 'WATCHING'}, status: 'online'}), 5000);
}