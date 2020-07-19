module.exports = async (client, messageReaction, user) => {
     const message = messageReaction.message;
     const member = message.guild.members.cache.get(user.id);
     const emoji = messageReaction.emoji.name;
     const channel = message.guild.channels.cache.find(c => c.id === '709599127012638770');
     const r6Role = message.guild.roles.cache.get("729788722333352028");
     const gtaRole = message.guild.roles.cache.get("729794048524550277");
    if (member.user.bot) return;

    if (messageReaction.partial) {
        await messageReaction.fetch();
        return;
    }

    if(["r6", "gta"].includes(emoji) && message.channel.id === channel.id) {
        switch (emoji) {
            case "r6":
                member.roles.add(r6Role);
                break;
            case "gta":
                member.roles.add(gtaRole);
                break;    
        }
    }

};