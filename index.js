import {app} from "./non-web.js";
import { WebApp, webApp } from "./web.js";

class myapp extends app {
    main() {
        console.log("asdf");
    }
}

class MyWebAppInstance extends WebApp {
    port = 8080
    prefix = "/"
}

let MyApp = new myapp();
let MyWebApp = new MyWebAppInstance();

MyWebApp.sendTemplate("","index");
MyWebApp.sendTemplate("articles/html-basic","html-basic");
MyWebApp.run();