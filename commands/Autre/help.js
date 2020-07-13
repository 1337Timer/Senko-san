const { MessageEmbed } = require("discord.js");
const { PREFIX } = require('../../config');
const { readdirSync } = require("fs");
const { MESSAGES } = require("../../util/constants");
const categoryList = readdirSync('./commands');


module.exports.run = (client, message, args) => {   
    if (!args.length) {
        const embed = new MessageEmbed()
        .setColor("#2ECC71")
        .addField("<:Liste:731919269134205058> Liste des commandes", `Pour plus d'informations sur une commande, tapez \`${PREFIX}help <commande>\``)

        for (const category of categoryList) {
            embed.addField(
                `<:IconJoin:731919767425777806> ${category}`,
                `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
            );
        };

        return message.channel.send(embed);
    } else {
        const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
        if (!command) return message.reply("Cette commande n'exite pas.");

        const embed = new MessageEmbed()
        .setColor("#2ECC71")
        .setTitle(`${command.help.name}`)
        .addField("Description", `${command.help.description}\n(Cooldown: **${command.help.cooldown}**s)`)
        .addField("Utilisation", command.help.usage ? `${PREFIX}${command.help.name} ${command.help.usage}` : `${PREFIX}${command.help.name}`, true)

        if (command.help.aliases.length >= 1) embed.addField("Alias", `${command.help.aliases.join(', ')}`, true);
        return message.channel.send(embed);
    }
};

module.exports.help = MESSAGES.COMMANDS.AUTRE.HELP;