const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('<:SenkoThinking:735210310138331229> Spécifiez un nombre entre 1 et 100.')

    const messages = await message.channel.messages.fetch({
        limit: Math.min(args[0], 100),
        before: message.id,
    });

    message.delete();
    await message.channel.bulkDelete(messages);

    message.channel.send(`Messages supprimés <:SenkoHappy:735207442916442153>`).then(msg => {msg.delete({ timeout: 3000 })})
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.PURGE;