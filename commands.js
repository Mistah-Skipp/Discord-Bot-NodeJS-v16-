
const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const { clientID, TOKEN } = require('./config.json');
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
const path = require('node:path');
const fs = require('node:fs');

const commands = [];
const commandsPath = path.join(__dirname, 'commands');//get loication of command folder
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
//read dir for all files only ending in .js

for (const file of commandFiles) {//for all files in array, append dirPath,set command to file
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

rest.put(
	Routes.applicationCommands(process.env.clientID),
	{ body: commands }).then(data => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);

