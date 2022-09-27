const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('list all commands'),
	async execute(interaction) {
		await interaction.reply('ping: replys with pong\nrename: [enterUser] [enterNewName]');
	},
};