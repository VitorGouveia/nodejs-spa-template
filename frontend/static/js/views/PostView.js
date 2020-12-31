import Template from "./Template.js";

export default class extends Template {
    constructor(params) {
        //como 'this' é usado o 'super()' é necessário
        super(params);
        //define o número do post como parâmetro
        this.postId = params.id;
        //título da página
        this.setTitle("Viewing Post");
    }

    //html da página
    async getHtml() {
        return `
            <h1>Post</h1>
            <p>You are viewing post #${this.postId}.</p>
        `;
    }
}