const config = require("../../config")
module.exports = client => {
    console.log(`✔️  Connecté en tant que ${client.user.username} !`);
    
    let activities = ['!help', `${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} membres`], i = 0;

    setInterval(() => client.user.setPresence({ activity:{ name: `${activities[i++ % activities.length]}`, type: 'WATCHING'}, status: 'online'}), 5000);
}