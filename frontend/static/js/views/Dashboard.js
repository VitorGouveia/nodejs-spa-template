import Template from "./Template.js";

export default class extends Template {
    constructor(params) {
        //como 'this' é usado o 'super()' é necessário
        super(params);
        //título da página
        this.setTitle("Dashboard");
    }

    //html da página
    async getHtml() {
        return `
            <h1>Welcome back, Vitor</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}