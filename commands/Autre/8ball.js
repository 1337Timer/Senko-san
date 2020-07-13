const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
        const replies = ["<:SenkoHappy:732191612326903808> Oui", "<:SenkoHands:732192810505339001> Non", "<:SenkoThinking:732192434137727057> Peut-être", "<a:TakagiShhh:714900433654513726> Ne le dites à personne, mais oui", "<a:TakagiShhh:714900433654513726> Ne le dites à personne, mais non", "Pas aujourd'hui", "Seulement aujourd'hui"];
        const question = args.join(" ");
        const response = Math.floor(Math.random() * replies.length);

        
        message.channel.send(`**<:SenkoThinking:732192434137727057> Question :** ${question}\n **<:IconJoin:731919767425777806> Réponse :** ${replies[response]}`);
        message.delete();
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.EIGHTBALL;