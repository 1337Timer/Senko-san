module.exports = async (client, oldMember, newMember) => {
    const channel = client.channels.cache.get('639112437286567937');

    if (oldMember.roles.cache.size !== newMember.roles.cache.size) {
        if (!oldMember.roles.cache.has('592747125931245578') && newMember.roles.cache.has('592747125931245578')) {
            channel.send(`<a:boost:743075220734345268> ${newMember} vient de booster le serveur ! <a:SenkoHeart:735207442346148020>`);
        }
    }
}