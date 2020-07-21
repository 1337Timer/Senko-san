const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
        const replies = ["<:SenkoHappy:735207442916442153> Oui", "<:SenkoHands:735207456262586439> Non", "<:SenkoThinking:735210310138331229> Peut-être", "<a:TakagiShhh:735208630852517989> Ne le dites à personne, mais oui", "<a:TakagiShhh:735208630852517989> Ne le dites à personne, mais non", "Pas aujourd'hui", "Seulement aujourd'hui"];
        const question = args.join(" ");
        const response = Math.floor(Math.random() * replies.length);

        
        message.channel.send(`**<:SenkoThinking:735210310138331229> Question :** ${question}\n **<:IconJoin:735207925370454066> Réponse :** ${replies[response]}`);
        message.delete();
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.EIGHTBALL;