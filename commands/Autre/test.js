const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message) => {
    client.emit("guildMemberAdd", 
    message.member || (await message.guild.fetchMember(message.author)))

    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.TEST;