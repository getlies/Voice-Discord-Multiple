 const config = require("../../setup/config.js");

module.exports = {
    name: "say",
    description: "Send a message to a specified channel.",
    async execute(client, message, args) {
        if (!message.content.startsWith(config.prefix)) return;
        if (!config.allowedUsers.includes(message.author.id)) {
            return; 
        }

        const sayMessage = args.join(" ");
        const channelId = message.channel.id; 
        const msgContent = args.slice(1).join(" ");

        try {
            if (config.sayReplyEnabled) {
                await message.reply(sayMessage);
            } else {
                await message.channel.send(sayMessage);
            }
        } catch (error) {
            console.error(error);
        }
    }
};
