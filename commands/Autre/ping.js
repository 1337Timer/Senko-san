const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    
const msg = await message.channel.send("Pong !");
    
    msg.edit(
    `
    ⌛ Latence du bot : **${msg.createdTimestamp - message.createdTimestamp}** ms\n⏱️ Latence de l'API : **${Math.round(client.ws.ping)}** ms
    `
    )
    
    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.PING;