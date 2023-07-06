const api = require("../../clientHttp/client.js");
const { EmbedBuilder } = require('discord.js');

// FOX COMMAND

async function foxCommand(message) {
  // get the api response
  const url = await api.getRandomFox();

  // create embed
  const foxEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setAuthor({ name: message.author.username})
	.setImage(url.image)
	.setTimestamp();

  // send embed
  message.channel.send({ embeds: [foxEmbed] });
}

// export functions
module.exports = {foxCommand};
