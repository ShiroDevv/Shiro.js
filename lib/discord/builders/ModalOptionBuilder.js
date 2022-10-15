class ModalOptionBuilder {
    constructor() {
        this.modal = {
            type: 4
        }
    }

    setId(id) {
        if (typeof id !== "string") throw new Error("ID must be a string");
        if (id.length > 100) throw new Error("ID must be less that 100 characters long");

        this.modal.custom_id = id;
    }

    setStyle(style) {
        const style2 = parseStyle(style);

        this.modal.style = style2;
    }

    setLabel(label) {
        if (typeof label !== "string") throw new Error("label must be a string");
        if (label.length > 45) throw new Error("Label text must be less than 42 characters");
        this.modal.label = label;
    }

    setMinLength(number) {
        if (typeof number != "number") throw new Error("The minimum length needs to be a number");
        if (number > 4000) throw new Error("Max length for the min length is 4000");
        this.modal.min_length = number;
    }

    setMaxLength(number) {
        if (typeof number != "number") throw new Error("The maximum length needs to be a number");
        if (number > 4000) throw new Error("Max length for the max length is 4000");
        this.modal.max_length = number;
    }

    setRequired(boolean) {
        if (typeof (boolean) !== "boolean") throw new Error("The required field must be a boolean");
        this.modal.required = boolean;
    }

    setValue(string) {
        if (typeof (string) !== "string") throw new Error("the value must be a string");
        if (string.length > 4000) throw new Error("Default value must be less than 4000 characters");

        this.modal.value = string;
    }

    setPlaceholder(string) {
        if (typeof (string) !== "string") throw new Error("the value must be a string");
        if (string.length > 4000) throw new Error("placeholder must be less than 100 characters");
        this.modal.placeholder = string;
    }

    returnModal() {
        return this.modal;
    }
}

function parseStyle(style) {
    if (typeof (parseStyle) === "string") {
        switch (style) {
            case "Short":
                return 1;
            case "Paragraph":
                return 2;
        }
    }

    if (typeof (parseStyle) === "number") {
        if (number > 0 && number < 3) return number;
        else return 1;
    }

    return 1;
}

module.exports = ModalBuilder;