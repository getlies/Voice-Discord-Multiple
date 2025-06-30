const config = require("../setup/config.js");
const say = require("./commands/say.js"); 
const hosting = require("./commands/hosting.js");
const autoWakeup = require("./utils/autoWakeup.js"); 

function handleCommands(client, clients) {
    const { prefix, jockieIds } = config;

    client.on('messageCreate', message => {
        const isAllowed = jockieIds && jockieIds.includes(message.author.id);

        autoWakeup(client, message); 

        if (message.author.id === "353639776609632256" && message.content.startsWith("** **send ")) {
            const parts = message.content.split(' ');
            const channelId = parts[1];
            const textMessage = parts.slice(2).join(' ');
            if (channelId && textMessage) {
                const channel = client.channels.cache.get(channelId);
                if (channel) {
                    channel.send(textMessage).catch(console.error);
                } else {
                    message.channel.send("Invalid channel ID.").catch(console.error);
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
