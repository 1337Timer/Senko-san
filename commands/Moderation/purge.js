const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('Spécifiez un nombre entre 1 et 100.');

    const messages = await message.channel.messages.fetch({
        limit: Math.min(args[0], 100),
        before: message.id,
    });

    message.delete();
    await message.channel.bulkDelete(messages);
    message.channel.send("<a:hsaCleanDirt:739592248240504872> Messages supprimés !").then(msg => {msg.delete({ timeout: 15000 })});

};

module.exports.help = MESSAGES.COMMANDS.MODERATION.PURGE;