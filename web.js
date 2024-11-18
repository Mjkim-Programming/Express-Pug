import express from "express";

export const webApp = express();

webApp.set('view engine', 'pug');

export class WebApp {
    port = 3000
    prefix = ""
    sendText(link, returnValue) {
        webApp.get(this.prefix+link, (req, res) => {
            res.send(returnValue);
        });
    }
    sendTemplate(link, fileName) {
        webApp.get(this.prefix+link, (req, res) => {
            res.render(fileName);
        })
    }
    run() {
        webApp.listen(this.port, () => {
            console.log(`Web App Listening on port ${this.port}`);
        })
    }
}

export function InitWebApp(portInput, prefixInput) {
    class Web extends WebApp{
        port = portInput
        prefix = prefixInput
    }
    let App = new Web();
    return App;
}