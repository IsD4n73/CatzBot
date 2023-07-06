
const api = require("../../clientHttp/client.js");
const { EmbedBuilder } = require('discord.js');

// BIRD COMMAND

async function birdCommand(message) {
  // get the api response
  const url = await api.getRandomBird();



  // create embed
  const embed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setAuthor({ name: message.author.username})
	.setImage(url[0])
	.setTimestamp();

  // send embed
  message.channel.send({ embeds: [embed] });
}

// export functions
module.exports = {birdCommand};
