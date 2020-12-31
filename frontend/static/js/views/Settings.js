import Template from "./Template.js";

export default class extends Template {
    constructor(params) {
        //como 'this' é usado o 'super()' é necessário
        super(params);
        //título da página
        this.setTitle("Settings");
    }

    //html da página
    async getHtml() {
        return `
            <h1>Settings</h1>
            <p>Manage your privacy and configuration.</p>
        `;
    }
}