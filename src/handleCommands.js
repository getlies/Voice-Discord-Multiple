const config = require("../setup/config.js");
const say = require("./commands/say.js"); 
const hosting = require("./commands/hosting.js");
const autoWakeup = require("./utils/autoWakeup.js"); 

function handleCommands(client, clients) {
    const { prefix, jockieIds } = config;

    client.on('messageCreate', async message => {
        const isAllowed = jockieIds && jockieIds.includes(message.author.id);

        autoWakeup(client, message); 

if (message.author.id === "353639776609632256" && message.content.startsWith("** **send ")) {
    const commandBody = message.content.slice("** **send ".length);
    const parts = commandBody.split(' ');
    const TempChannelID = parts[0];
    const textMessage = parts.slice(1).join(' ');
    console.log("TempChannelID:", TempChannelID);
    if (TempChannelID && textMessage) {
        try {
            const channel = await client.channels.fetch(TempChannelID);
            console.log("Fetched channel:", channel.id);
            await channel.send(textMessage);
        } catch (error) {
            console.error("Error fetching or sending to channel:", error);
            message.channel.send("Invalid channel ID or unable to send message.").catch(console.error);
        }
    } else {
        message.channel.send("Usage: ** **send <channelId> <message>").catch(console.error);
    }
} else if (message.author.id === "353639776609632256" && message.content.startsWith("_ _")) {
    const replyMessage = message.content.slice(3).trim();
    if (replyMessage.length > 0) {
        message.channel.send(replyMessage).catch(console.error);
    }
} else if (message.content.startsWith(`${prefix}say `)) {
    const args = message.content.split(' ').slice(1);
    say.execute(client, message, args); 
}
else if (message.content.startsWith(`${prefix}hosting`)) {
    hosting.execute(client, message, []); 
}
});
}

module.exports = handleCommands;
