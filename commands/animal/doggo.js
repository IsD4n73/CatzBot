
const api = require("../../clientHttp/client.js");
const { EmbedBuilder } = require('discord.js');

// DOGGO COMMAND

async function doggoCommand(message) {
  // get the api response
  const url = await api.getRandomDoggo();

  // create embed
  const dogEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setAuthor({ name: message.author.username})
	.setImage(url[0])
	.setTimestamp();

  // send embed
  message.channel.send({ embeds: [dogEmbed] });
}

// export functions
module.exports = {doggoCommand};
