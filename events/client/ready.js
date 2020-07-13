const config = require("../../config")
module.exports = client => {
    console.log(`✔️  Connecté en tant que ${client.user.username} !`);
    
    let activities = ['!help', 'avec toi :3'], i = 0;

    setInterval(() => client.user.setPresence({ activity:{ name: `${activities[i++ % activities.length]}`, type: 'PLAYING'}, status: 'online'}), 5000);
}