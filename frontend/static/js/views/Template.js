//esse arquivo serve como um template para os outros
export default class {
    constructor(params) {
        this.params = params;
    }

    //define o título da página
    setTitle(title) {
        document.title = title;
    }

    //define o html que a página vai mostrar
    async getHtml() {
        return "";
    }
}