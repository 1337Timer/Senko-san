const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first());
    if (isNaN(args[1]) || (args[1] < 1 || args[1] > 100)) return message.reply('Spécifiez un nombre entre 1 et 100.');

    const messages = (await message.channel.messages.fetch({
        limit: 100,
        before: message.id,
    })).filter(a => a.author.id === user.id).array();

    message.length = Math.min(args[1], messages.length);

    if (message.length === 0 || !user) return message.reply('Aucun message à supprimer/Cet utilisateur n\'existe pas');

    if (messages.length === 1) await messages[0].delete();
    else await message.channel.bulkDelete(messages);

    message.delete();
    await message.channel.bulkDelete(messages);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.PRUNE;