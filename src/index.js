async function nicrom(options = {}) {
    if (!options.interaction) throw new TypeError("Not A Valid Interaction!")
    if (!options.message) throw new TypeError("Not A Valid Message!");
    if (!options.channel) throw new TypeError("Not A Valid channel!");
    if (!options.member) throw new TypeError("Not A Valid member!");
    if (!options.intmsg) throw new TypeError("You Did'NT Provided That Message Should Be !");

    console.log(`[ NICROM LOGS ] ${options.message}, ${options.interaction.user.username}[${options.interaction.user.id}]`)
    
    let msg;
    if (options.intmsg === true) msg = await options.interaction.reply({ content: `# Your message has been Sent:`, ephemeral: true });
    else msg = await options.interaction.reply({ content: `# Your message has been Sent:`, });
    

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
