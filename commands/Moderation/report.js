const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

const isFirstCharNumeric = c => /\d/.test(c);

module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    const guild = message.guild;
    let raison = args[1];

    if(!raison) return message.reply("<:SenkoThinking:735210310138331229> Indiquez une raison")
    
    if (guild.id == "527568704666599444") {
        const embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setThumbnail(user.displayAvatarURL({ format: 'png', dynamic: true}))
        .addFields(
            { name: "<:IconJoin:735207925370454066> Utilisateur reporté", value: user.username, inline: true },
            { name: "🔗 Liens du message", value: isFirstCharNumeric(raison.charAt(0)) ? `[Clique ici](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${args[1]})` : 'Aucun lien précisé', inline: true},
            { name: "<:ItemMagnifyingGlass:735207739587952682> Raison", value: isFirstCharNumeric(raison.charAt(0)) ? args.slice(args.indexOf(args[2])).join(" ") : args.slice(args.indexOf(args[1])).join(" ") }
        )
        .setTimestamp()

        client.channels.cache.get('699452457104834580').send(embed);
        message.delete();
    }
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.REPORT;