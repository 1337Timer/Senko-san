const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    await message.delete();
    await client.channels.cache.get('709599127012638770').send("<a:charging:730879028072022126> Le bot redémarre");
    process.exit();
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;