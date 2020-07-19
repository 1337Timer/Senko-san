const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message) => {
    client.emit("guildMemberAdd", 
    message.member || (await message.guild.fetchMember(message.author)))

    message.delete();
    console.log(__dirname);
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.TEST;