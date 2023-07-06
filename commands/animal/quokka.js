const api = require("../../clientHttp/client.js");
const { EmbedBuilder } = require('discord.js');

async function quokkaCommand(message) {
  // get the api response
  const url = await api.getRandomQuokka();

  // create embed
  const quokkaEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setAuthor({ name: message.author.username})
	.setImage(url.image)
	.setTimestamp();

  // send embed
  message.channel.send({ embeds: [quokkaEmbed] });

}

// export functions
module.exports = {quokkaCommand};
