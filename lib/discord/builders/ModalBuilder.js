//! INCOMPLETE

class ModalBuilder {
    constructor() {
        this.modal = {
            components: [{
                type: 1,
                components: []
            }]
        }
    }

    setTitle(title) {
        if (typeof (title) != "string") throw new Error("Title must be a string");
        this.modal.title = title;
    }

    setId(id) {
        if (typeof (id) != "string") throw new Error("ID must be a string");
        this.modal.custom_id = id;
    }

    addComponenet(component) {
        if (typeof component != "object") throw new Error("Component must be an object");
        this.modal.components[0].components.push(component);
    }

    returnModal() {
        return this.modal;
    }
}

module.exports = ModalBuilder;