
const api = require("../../clientHttp/client.js");
const cons = require("../../clientHttp/urls.js");
const { EmbedBuilder } = require('discord.js');

// DOG COMMAND

async function dogCommand(message) {
  // get the api response
  const url = await api.getRandomDog();

  // skip video
  if(url.url.includes(".mp4")) dogCommand(message);

  // create embed
  const dogEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setAuthor({ name: message.author.username})
	.setImage(url.url)
	.setTimestamp();

  // send embed
  message.channel.send({ embeds: [dogEmbed] });
}

// export functions
module.exports = {dogCommand};
