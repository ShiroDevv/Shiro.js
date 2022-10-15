class SelectMenuBuilder {
    constructor() {
        this.menu = {
            options: []
        };
    }

    //! Changing this from 3 will remove all options!
    setType(type) {
        if (typeof type != "number" && typeof type != "string") throw new Error("Invalid type for menu");
        const returnType = parseType(type);

        if (returnType === 3) {
            if (!Array.isArray(this.options)) this.menu.options = [];
            this.menu.channel_types = undefined;
        } else {
            if (returnType === 8) this.menu.channel_types = [];
            this.menu.options = undefined;
        }

        this.menu.type = returnType;
    }

    setId(id) {
        if (typeof id !== "string") throw new Error("Invalid id for menu");
        if (id.length > 100) throw new Error("max size for an id is 100");

        this.menu.custom_id = id;
    }

    addOptions(label, value, description, emoji, selected = false) {
        if (this.menu.type !== 3) throw new Error("To add options, it needs to be a text type (3)");
        if (typeof label !== "string") throw new Error("Label must be a string");
        if (typeof value !== "string") throw new Error("Value must be a string");
        if (typeof description !== "string" && description !== undefined) throw new Error("description must be a string");
        if (typeof selected !== "boolean") throw new Error("Selected needs to be a string");
        if (typeof (emoji) !== "object" && emoji !== undefined) throw new Error("emoji needs to be an object");
        if (typeof emoji === "object") {
            if (!emoji.id || !emoji.name || !emoji.animated) throw new Error("Invalid emoji object");
        }
        this.menu.options.push({
            label: label,
            value: value,
            description: description,
            emoji: emoji,
            default: selected
        })
    }

    setChannelTypes(types = []) {
        if (Array.isArray(types) === false) throw new Error("channel types needs to be an array");
        if (this.menu.type !== 8) throw new Error("channel types can only be put on channel menus");

        let types2 = parseChannels(types);

        if (!Array.isArray(types2)) types2 = [3];

        this.menu.channel_types = types2;
    }

    setPlaceholder(text) {
        if (typeof (text) !== "string") throw new Error("Placeholder text must be a string");

        this.menu.placeholder = text;
    }

    setMinValue(number) {
        if (typeof number != "number") throw new Error("minValue must be a number");
        if (number > 25 || number <= 0) throw new Error("Maximum min value is 25, minimum is 0");

        this.menu.min_values = number;
    }

    setMaxValue(number) {
        if (typeof number != "number") throw new Error("maxValue must be a number");
        if (number > 25 || number <= 1) throw new Error("Maximum Max value is 25, minimum is 1");
        this.menu.max_values = number;
    }

    setDisabled(boolean = false) {
        if (typeof boolean != "boolean") throw new Error("Disabled must be a boolean");

        this.menu.disabled = boolean;
    }

    returnMenu() {
        return this.menu;
    }
}

function parseType(type) {
    if (typeof type === "string") {
        switch (type) {
            case "text":
                return 3;
            case "user":
                return 5;
            case "role":
                return 6;
            case "mentionable":
                return 7;
            case "channels":
                return 8;
            default:
                return 3;
        }
    } else {
        const typeArray = [3, 5, 6, 7, 8]
        if (!typeArray.includes(type)) return 3;
        return type;
    }
}

function parseChannels(channelTypeArray) {
    let returnArray = [];

    for (let i = 0; i < channelTypeArray.length; i++) {
        if (typeof (channelTypeArray[i] === "string")) {
            switch (channelTypeArray[i]) {
                case "GUILD_TEXT":
                    returnArray.push(0);
                    break;
                case "DM":
                    returnArray.push(1);
                    break;
                case "GUILD_VOICE":
                    returnArray.push(2);
                    break;
                case "GROUP_DM":
                    returnArray.push(3);
                    break;
                case "GUILD_CATEGORY":
                    returnArray.push(4);
                    break;
                case "GUILD_ANNOUNCEMENT":
                    returnArray.push(5);
                    break;
                case "ANNOUNCEMENT_THREAD":
                    returnArray.push(10);
                    break;
                case "PUBLIC_THREAD":
                    returnArray.push(11);
                    break;
                case "PRIVATE_THREAD":
                    returnArray.push(12);
                    break;
                case "GUILD_STAGE_VOICE":
                    returnArray.push(13);
                    break;
                case "GUILD_DIRECTORY":
                    returnArray.push(14);
                    break;
                case "GUILD_FORUM":
                    returnArray.push(15);
                    break;
                default:
                    returnArray.push(0);
                    break;
            }
        } else {
            const channelArray = [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15];

            if (channelArray.includes(channelTypeArray[i])) returnArray.push(channelTypeArray[i]);
        }

        return returnArray;
    }
}

module.exports = SelectMenuBuilder;