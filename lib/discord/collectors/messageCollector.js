async function MessageCollector(channelID, options, returnFunction, bot) {
    if (typeof channel !== "string") throw new Error("Channel ID must be a string");
    if (typeof options !== "object" || typeof options.maxMessages !== "number") throw new Error("Options must be an object");
    if (typeof returnFunction !== "function") throw new Error("The returnFunction must be a function");
    if (!bot) throw new Error("The client is required for this to work");

    let messagesCollected = [];
    let amountOfMessages = 0;
    let finalMessages = options.maxMessages;
    let finished = false;
    bot.on("messageCreate", function onMessage(msg) {
        if (msg.channel.id === channelID) {
            if (finalMessages === amountOfMessages) {
                bot.removeEventListener("messageCreate", onMessage);
                finished = true;
                return;
            }

            if (amountOfMessages < options.maxMessages) {
                returnFunction(msg);
                messagesCollected.push(msg);
                amountOfMessages++;
            }
        }
    });
}

module.exports = MessageCollector;