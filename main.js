const { Client, Collection } = require('discord.js');
const { TOKEN } = require("./config");
const { loadCommands, loadEvents } = require("./util/loader");

const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });;
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);

client.on('message', message => {

    if (message.content.toLowerCase() === 'bonjour' || message.content.toLowerCase() === 'hey' || message.content.toLowerCase() === 'salut' || message.content.toLowerCase() === 'hello') {
        message.react('👋');
    }

    if (message.content.toLowerCase() === 'bienvenue') {
        message.react('❤️');
    }

    if (message.mentions.members.first()) {

        let member = message.mentions.members.first();

        if (member.user.id === '265924886461939712') {
            message.react('🌺');
        }
    }
})

client.login(TOKEN);