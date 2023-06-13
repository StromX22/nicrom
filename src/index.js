async function nicrom(options = {}) {
    if (!options.message) throw new TypeError("Not A Valid Message!");
    if (!options.channel) throw new TypeError("Not A Valid channel!");
    if (!options.member) throw new TypeError("Not A Valid member!");
    options.channel.send({ content: `${options.message} - ${options.member} - ${options.channel}`})

    const webhook = await options.channel.createWebhook({
        name: options.member.user.username,
        avatar: options.member.user.avatarURL(),
        channel: options.channel
    });
    await webhook.send(options.message);

    const del = await options.channel.guild.fetchWebhooks();
    await Promise.all(del.map(async web => {
        if (web.token !== webhook.token || web.id !== webhook.id) return;
        else {
            await web.delete();
        }
    }));
    
}
 
module.exports = nicrom
