
const { EmbedBuilder } = require('discord.js');

// HELP COMMAND

function helpCommand(message){

  // create embed
  const catEmbed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle("Comandi Bot")
  .setDescription("I paramentri racchiusi tra [] sono opzionali")
  .setAuthor({ name: message.author.username})
  .setTimestamp()
  .addFields(

		{ name: '\u200B', value: '\u200B' },

		{ name: '!cat', value: 'Immagine di gatti' },
		{ name: '!fox', value: 'Immagine di volpi' },
    { name: '!dog', value: 'Immagine di cani' },
    { name: '!quokka', value: 'Immagine di quokka' },
    { name: '!duck', value: 'Immagine di papere' },
    { name: '!bird', value: 'Immagine di uccelli' },
    { name: '!doggo', value: 'Immagine di doggo' },
    
		{ name: '\u200B', value: '\u200B' },

    { name: '!coffee', value: 'Immagine di caffee' },
    { name: '!delete [@user]', value: 'Cancella un utente' },
    { name: '!not-stonks', value: 'Niente Stonks' },
    { name: '!stonks [@user]', value: 'Stonks' },
    { name: '!confuse-stonks [@user]', value: 'Stonks ma confusi' },
    { name: '!gay [@user]', value: 'Avatar con bandiera LGBTQ' },
    { name: '!hitler [@user]', value: 'Peggio di Hitler...' },
    { name: '!jail [@user]', value: 'Manda in prigione' },
    { name: '!rip [@user]', value: 'Riposa in pace' },
    { name: '!slap @user', value: 'Schiaffeggia un utente' },
    { name: '!trash [@user]', value: 'Focus sulla spazzatura' },
    { name: '!wanted [@user]', value: 'Ricercato con taglia' },
    { name: '!trigger [@user]', value: 'Triggera utente' },
    
		{ name: '\u200B', value: '\u200B' },
    { name: '!profile [@user]', value: 'Visualizza il tuo profilo per il livello' },
    { name: '!leaderboard', value: 'Visualizza la classifica del server per i livelli' },

    { name: '\u200B', value: '\u200B' },

    { name: '!stats', value: 'Statistiche server' },
    { name: '!insulta @utente', value: 'Insulta qualcuno' },
	);

  // send embed
  message.channel.send({ embeds: [catEmbed] });

}

// export functions
module.exports = {helpCommand};
