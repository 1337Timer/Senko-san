const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
        const replies = ["<:peepoYes:731905323920523344> Oui", "<:peepoNo:731905309861347389> Non", "<a:ablobshrug:731904826874789930> Peut-être", "<a:TakagiShhh:714900433654513726> Ne le dites à personne, mais oui", "Pas aujourd'hui", "Seulement aujourd'hui"];
        const question = args.join(" ");
        const response = Math.floor(Math.random() * replies.length);

        
        message.channel.send(`**<:E_MonkaHmmm:731919634936234066> Question :** ${question}\n **<:IconJoin:731919767425777806> Réponse :** ${replies[response]}`);
        message.delete();
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.EIGHTBALL;