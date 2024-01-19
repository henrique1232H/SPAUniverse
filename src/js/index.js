import Router from "./router.js";
import { checkWindowLocation } from "./checkWindowLocation.js";


const routes = new Router();

routes.add("/", "./src/pages/home.html");
routes.add("/theUniverse", "./src/pages/theUniverse.html");
routes.add("/exploration", "./src/pages/exploration.html");
routes.add(404, "./src/pages/404.html");

routes.handle();
checkWindowLocation();

window.onpopstate = () => {
    routes.handle();
    checkWindowLocation();
};
window.route = () => {
    routes.router();
    checkWindowLocation();
    
}
