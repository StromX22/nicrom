# **NICROM**

<p align="center">
  <a href="https://www.npmjs.com/package/nicrom">
    <img src="https://img.shields.io/npm/dt/nicrom?style=for-the-badge" alt="npm" />
  </a>

  <a href="https://discord.gg/invite/GaczkwfgV9">
    <img src="https://img.shields.io/discord/848060892541091842?color=5865F2&label=StromX&style=for-the-badge" alt="Discord Server" />
  </a>
</p>

> **Nicrom is a powerful npm package which maker bot developemnt easier :)**


## **⚙️ Installation** 
**`Does'nt` Support v13**
```
npm i nicrom@latest
```


## **✨ Features**

- Easy to use.
- Simple.
- Slash Commands Support.
- Supports Discord.js v14.


## **📚 Usage**
```js
const { SlashCommandBuilder } = require('discord.js');
 const nicrom_spoofer = require('nicrom');

module.exports = { 
    data: new SlashCommandBuilder() 
    .setName('say') 
    .setDescription('Echos Your Message!') 
    .addUserOption(option => option.setName('member').setDescription('The member you want to spoof').setRequired(true)) 
    .addStringOption(option => option.setName('message').setDescription('The message you want the member to say').setRequired(true))
    .addChannelOption(option => option.setName('channel').setDescription('The Message should be sent in').setRequired(true)),
    async execute (interaction) {

    const { options } = interaction;
    const member = await interaction.guild.members.cache.get(options.getUser('member').id);
    const message = options.getString('message');
    const channel = options.getChannel('channel');

    if (message.includes('@everyone') || message.includes('@here')) return await interaction.reply({ content: `You can't Bypass Prems .`, ephemeral: true });
    

    await interaction.reply({ content: `Your message has been Sent:`, ephemeral: true})
    nicrom_spoofer({ member: member, message: message, channel: channel }).catch(async err => {
        await interaction.editReply({ content: `There was an error Tromb: \`${err}\``, ephemeral: true });
    })

}
}
```

## **❔ Support**
<a href="https://discord.gg/invite/BM5DnMunMZ"><img src="https://invidget.switchblade.xyz/BM5DnMunMZ" alt="Discord"></a>
