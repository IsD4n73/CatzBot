
const api = require("../../clientHttp/client.js");
const { EmbedBuilder } = require('discord.js');

// COFFEE COMMAND

async function coffeeCommand(message) {
  // get the api response
  const url = await api.getRandomCoffee();

  // create embed
  const coffeeEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setAuthor({ name: message.author.username})
	.setImage(url.file)
	.setTimestamp();

  // send embed
  message.channel.send({ embeds: [coffeeEmbed] });
}

// export functions
module.exports = {coffeeCommand};
