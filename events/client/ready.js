module.exports = client => {
    console.log(`✔️  Connecté en tant que ${client.user.username} !`);
    
    let activities = ['s!help', `${fetchAll.size} membres`], i = 0;

    setInterval(() => client.user.setPresence({ activity:{ name: `${activities[i++ % activities.length]}`, type: 'WATCHING'}, status: 'online'}), 5000);
}