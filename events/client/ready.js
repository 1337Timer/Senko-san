const { ErelaClient } = require("erela.js");
const config = require("../../config")
module.exports = client => {
    console.log(`✔️  Connecté en tant que ${client.user.username} !`);
    client.channels.cache.get('709599127012638770').send("<:verified:730879014004326431> Le bot est opérationnel");
    
    let activities = ['!help', 'l\'Abysse'], i = 0;

    setInterval(() => client.user.setPresence({ activity:{ name: `${activities[i++ % activities.length]}`, type: 'WATCHING'}, status: 'online'}), 5000);
}