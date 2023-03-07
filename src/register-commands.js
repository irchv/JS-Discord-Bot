require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = {
  name: `hey`,
  description: `Reply with hey`,
};
const rest = new REST({ verison: '10' }).setToken(process.env.TOKEN);
(async () => {
  try {
    console.log('Registering cmnds...');
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );
    console.log('Cmnds registered');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
