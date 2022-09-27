const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rename')
		.setDescription('change a user nickname'),
	async execute(interaction) {
		await interaction.reply('name changed');
	},
};