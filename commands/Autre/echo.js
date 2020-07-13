const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    message.channel.send(args.join(" "));
    message.delete();
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.ECHO;