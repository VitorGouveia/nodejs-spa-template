import Template from "./Template.js";

export default class extends Template {
    constructor(params) {
        //como 'this' é usado o 'super()' é necessário
        super(params);
        //título da página
        this.setTitle("Posts");
    }

    //html da página
    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>
        `;
    }
}