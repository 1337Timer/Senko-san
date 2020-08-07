module.exports = client => {
    console.log(`✔️  Connecté en tant que ${client.user.username} !`);
    const guild = client.guilds.get("527568704666599444");
    
    let activities = ['s!help', `${guild.members.filter(member => !member.user.bot).size} membres`], i = 0;

    setInterval(() => client.user.setPresence({ activity:{ name: `${activities[i++ % activities.length]}`, type: 'WATCHING'}, status: 'online'}), 5000);
}