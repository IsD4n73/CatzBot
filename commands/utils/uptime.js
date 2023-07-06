
// UPTIME COMMAND

function uptimeCommand(message, client) { 

    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);  
    let uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`; 


    message.channel.send(`Uptime: ${uptime}`);
}

// export functions
module.exports = {uptimeCommand};