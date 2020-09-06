const { Client, Collection } = require('discord.js');
const { TOKEN } = require("./config");
const { loadCommands, loadEvents } = require("./util/loader");

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });;
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);

client.on('message', message => {

    const message_lower = message.content.toLowerCase();
    const greetings = ['bonjour', 'hey', 'salut', 'hello'];

        if (greetings.includes(message_lower)) {
            message.react('👋');
        }

    if (message.content.toLowerCase() === 'bienvenue') {
        message.react('❤️');
    }
})

client.login(TOKEN);
