//! Discord part is a fork of Eris.js
"use strict"
const Client = require("./lib/discord/Client");

function Shiro(token, options) {
    return new Client(token, options);
}

Shiro.AutocompleteInteraction = require("./lib/discord/structures/AutocompleteInteraction");
Shiro.Base = require("./lib/discord/structures/Base");
Shiro.Bucket = require("./lib/discord/util/Bucket");
Shiro.Call = require("./lib/discord/structures/Call");
Shiro.CategoryChannel = require("./lib/discord/structures/CategoryChannel");
Shiro.Channel = require("./lib/discord/structures/Channel");
Shiro.CommandInteraction = require("./lib/discord/structures/CommandInteraction");
Shiro.ComponentInteraction = require("./lib/discord/structures/ComponentInteraction");
Shiro.Client = Client;
Shiro.Collection = require("./lib/discord/util/Collection");
Shiro.Command = require("./lib/discord/command/Command");
Shiro.CommandClient = require("./lib/discord/command/CommandClient");
Shiro.Constants = require("./lib/discord/Constants");
Shiro.DiscordHTTPError = require("./lib/discord/errors/DiscordHTTPError");
Shiro.DiscordRESTError = require("./lib/discord/errors/DiscordRESTError");
Shiro.ExtendedUser = require("./lib/discord/structures/ExtendedUser");
Shiro.GroupChannel = require("./lib/discord/structures/GroupChannel");
Shiro.Guild = require("./lib/discord/structures/Guild");
Shiro.GuildChannel = require("./lib/discord/structures/GuildChannel");
Shiro.GuildIntegration = require("./lib/discord/structures/GuildIntegration");
Shiro.GuildPreview = require("./lib/discord/structures/GuildPreview");
Shiro.GuildTemplate = require("./lib/discord/structures/GuildTemplate");
Shiro.Interaction = require("./lib/discord/structures/Interaction");
Shiro.Invite = require("./lib/discord/structures/Invite");
Shiro.Member = require("./lib/discord/structures/Member");
Shiro.Message = require("./lib/discord/structures/Message");
Shiro.NewsChannel = require("./lib/discord/structures/NewsChannel");
Shiro.NewsThreadChannel = require("./lib/discord/structures/NewsThreadChannel");
Shiro.Permission = require("./lib/discord/structures/Permission");
Shiro.PermissionOverwrite = require("./lib/discord/structures/PermissionOverwrite");
Shiro.PingInteraction = require("./lib/discord/structures/PingInteraction");
Shiro.PrivateChannel = require("./lib/discord/structures/PrivateChannel");
Shiro.PrivateThreadChannel = require("./lib/discord/structures/PrivateThreadChannel");
Shiro.PublicThreadChannel = require("./lib/discord/structures/PublicThreadChannel");
Shiro.Relationship = require("./lib/discord/structures/Relationship");
Shiro.RequestHandler = require("./lib/discord/rest/RequestHandler");
Shiro.Role = require("./lib/discord/structures/Role");
Shiro.SequentialBucket = require("./lib/discord/util/SequentialBucket");
Shiro.Shard = require("./lib/discord/gateway/Shard");
Shiro.SharedStream = require("./lib/discord/voice/SharedStream");
Shiro.StageChannel = require("./lib/discord/structures/StageChannel");
Shiro.StageInstance = require("./lib/discord/structures/StageInstance");
Shiro.StoreChannel = require("./lib/discord/structures/StoreChannel");
Shiro.TextChannel = require("./lib/discord/structures/TextChannel");
Shiro.TextVoiceChannel = require("./lib/discord/structures/TextVoiceChannel");
Shiro.ThreadChannel = require("./lib/discord/structures/ThreadChannel");
Shiro.ThreadMember = require("./lib/discord/structures/ThreadMember");
Shiro.UnavailableGuild = require("./lib/discord/structures/UnavailableGuild");
Shiro.UnknownInteraction = require("./lib/discord/structures/UnknownInteraction");
Shiro.User = require("./lib/discord/structures/User");
Shiro.VERSION = require("./package.json").version;
Shiro.VoiceChannel = require("./lib/discord/structures/VoiceChannel");
Shiro.VoiceConnection = require("./lib/discord/voice/VoiceConnection");
Shiro.VoiceConnectionManager = require("./lib/discord/voice/VoiceConnectionManager");
Shiro.VoiceState = require("./lib/discord/structures/VoiceState");
Shiro.MessageEmbed = require("./lib/discord/builders/MessageEmbed");
Shiro.ButtonBuilder = require("./lib/discord/builders/ButtonBuilder");
Shiro.SelectMenuBuilder = require("./lib/discord/builders/SelectMenuBuilder");
Shiro.ModalBuilder = require("./lib/discord/builders/ModalBuilder");

module.exports = Shiro;