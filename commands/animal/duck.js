const api = require("../../clientHttp/client.js");
const { EmbedBuilder } = require('discord.js');

async function duckCommand(message) {
  // get the api response
  const url = await api.getRandomDuck();

  // create embed
  const duckEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setAuthor({ name: message.author.username})
	.setImage(url.url)
	.setTimestamp();

  // send embed
  message.channel.send({ embeds: [duckEmbed] });

}

// export functions
module.exports = {duckCommand};
