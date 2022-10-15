//* Class to return a button object for use

class ButtonBuilder {

    constructor() {
        this.button = {};
        this.style = 1;
        this.customId = "";
        this.url = undefined;
    }

    setStyle(type) {
        if (typeof (type) === "string") {
            this.type = convertButtonType();
        } else {
            if (Math.abs(type) < 6) {
                if (Math.abs(type) === 5) this.customId = undefined;
                else this.url = undefined;
                this.style = type;
            }
        }
    }

    setId(id) {
        if (this.style === 5) throw new Error("Link buttons cannot have a custom id");
        if (id.length > 100) throw new Error("Custom id must be beneath 100 letters long");
        if (typeof id != "string") throw new Error("Id must be a string");
        this.customId = id;
    }

    setText(text) {
        if (typeof text != "string") throw new Error("When setting a label, text must be a string");

        this.text = text;
    }

    setEmoji(name, id, animated = false) {
        if (typeof (name) != "string") throw new Error("Emoji name needs to be a string");
        if (typeof (id) != "string") throw new Error("emoji id must be a string");
        if (typeof (animated) != "boolean") throw new Error("Animated must be a boolean");

        this.emoji = {
            id: id,
            name: name,
            animated: animated
        }
    }

    setUrl(url) {
        if (typeof (url) !== "string") throw new Error("URL Must be a string");
        if (this.style !== 5) throw new Error("Urls have to be on link buttons");

        this.url = url;
    }

    setDisabled(disabled = false) {
        if (typeof (disabled) !== "boolean") throw new Error("disabled must be a boolean");

        this.disabled = disabled;
    }

    returnButton() {
        return {
            type: 2,
            style: this.style,
            label: this.text,
            emoji: this.emoji,
            custom_id: this.customId,
            url: this.url,
            disabled: this.disabled
        }
    }
}

function convertButtonType(type) {
    switch (type) {
        case "Primary":
            return 1;
        case "Secondary":
            return 2;
        case "Success":
            return 3;
        case "Danger":
            return 4;
        case "Link":
            return 5;
    }
}

module.exports = ButtonBuilder;