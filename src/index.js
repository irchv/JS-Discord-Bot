const {
  Client,
  IntentsBitField,
  GuildMemberFlags,
  messageLink,
} = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
client.on('ready', (c) => {
  console.log(`🤯${c.user.username} is online`);
});
client.on('messageCreate', (msg) => {
  if (msg.content === 'hello') {
    msg.reply('Hey!');
  }
});
client.login(
  'MTA4MjM4MTI5MTkzNDE5NTcxMg.Gy5OMg.18ycF6wBdaaYIJVuDpX0BapZ455dcXzzEjqmWQ'
);
