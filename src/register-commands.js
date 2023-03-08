require('dotenv').config();
const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const clientId = process.env['clientid'];
const guildId = process.env['testguildid'];
const commands = [];

const rest = new REST({ verison: '10' }).setToken(process.env.TOKEN);
(async () => {
  try {
    console.log('Registering cmnds...');
    const data = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    );
    console.log('Cmnds registered');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
