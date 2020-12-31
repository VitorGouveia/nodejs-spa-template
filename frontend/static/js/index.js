//importando as páginas do /views/
import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import Settings from "./views/Settings.js";

//Usado para separar o número do post da rota '/posts/:id'
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

//Separa os paramêtros das rotas
const getParams = match => {
    // '/:id' do post
    const values = match.result.slice(1);
    //Guarda todos os parâmetros da rota em um array
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

//Troca a URL do navegador para a respectiva rota sem recarregar o arquivo
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    //Array com todas as rotas da aplicação
    const routes = [
        //Cada rota é um objeto
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/posts/:id", view: PostView },
        { path: "/settings", view: Settings }
    ];

    //Confere qual rota está ativa
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    //Verifica se a rota atual existe
    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    //Se a rota atual não existir, define a rota como '/'
    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    //Elemento no html que mostra o conteúdo dos '/views/'
    document.querySelector("#app").innerHTML = await view.getHtml();
};

//Permite que as rotas continuem funcionando mesmo que o usuário use as setinhas do browser
window.addEventListener("popstate", router);

//Quando o documento estiver carregado, chama a função router
document.addEventListener("DOMContentLoaded", () => {

   //Cria um event listener no body
    document.body.addEventListener("click", e => {
        //Verifica se o elemento clicado tem o atributo 'data-link'
        if (e.target.matches("[data-link]")) {
            //Caso o atributo data-link exista, a função 'navigateTo()' será chamado
            //'e.preventDefault()' previne o comportamento padrão dos links selecionados
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});