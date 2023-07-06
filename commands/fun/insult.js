const api = require("../../clientHttp/client.js");

async function insultCommand(message, args) {

  if(args[0] == null || !args[0].startsWith("<@")) {
    // send no user tagged
    message.reply("Non hai taggato nessuno... **!insulta @utente**");
    return;
  }

  if(args[0].startsWith("<@&")){
    // send role tagged
    message.reply("Devi taggare un utente, non un ruolo");
    return;
  }

  if(args[0] == "<@1123280770736336927>"){
    message.reply("Non ho intenzione di insultarmi da solo...");
    return;
  }

  // get the api response
  const url = await api.getRandomInsult();

  // send embed
  message.channel.send( args + " " + url.insult);

}

// export functions
module.exports = {insultCommand};
