class InteractionCommandBuilder {
    constructor() {
        this.interaction = {
            name: "",
            description: "",
            options: [],
            main: "",
            type: undefined
        }
    }

    setName(name) {
        if (typeof name !== "string") throw new Error("Interaction name has to be a string");
        this.interaction.name = name;
    }

    setDescription(description) {
        if (typeof description !== "string") throw new Error("Description has to be a string");
        this.interaction.description = description;
    }

    addOption(name, type, description, required) {
        if (typeof required !== "boolean") throw new Error("Required field must be a boolean");
        if (typeof description !== "string") throw new Error("Description field must be a string");
        if (typeof name !== "string") throw new Error("Name field must be an string");
        if (typeof type !== "number") throw new Error("Type field must be a number (Constants.ApplicationCommandOptionTypes.(Type)");

        let option = {
            name: name,
            description: description,
            type: type,
            required: required
        };

        if (required === true) {
            this.interaction.options.unshift(option);
        } else {
            this.interaction.options.push(option);
        }
    }

    setFunction(returnFunction) {
        this.interaction.main = returnFunction;
    }
}

module.exports = InteractionCommandBuilder;