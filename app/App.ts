// import "reflect-metadata";
import * as express from 'express';
import * as url from "url";
import * as next from 'next';
import * as path from 'path';
import * as bodyParser from 'body-parser';

class App {
    private _app: express.Application;
    private _nextServer: next.Server;

    get app(): express.Application {return this._app; }
    get nextServer(): next.Server {return this._nextServer; }

    constructor() {
        const dev = process.env.NODE_ENV !== 'production';
        this._app = express();
        this._nextServer = next({dir: './app', dev });

        this.cofigureNextApp(this._app);
    }

    private cofigureNextApp(app: express.Application) {
        const requestHhandler = this._nextServer.getRequestHandler();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));

        app.get("/service-worker.js", (req, res) => {
            const parsedUrl = url.parse(req.url, true);
            const {pathname} = parsedUrl;

            const filePath = path.join(__dirname, '.next', pathname!);

            res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
            res.set("Content-Type", "application/javascript");
            return  this._nextServer.serveStatic(req, res, filePath);
        });

        app.get('*', (req, res) => {
            // const parsedUrl = url.parse(req.url, true);
            // console.log('*',parsedUrl)
            return requestHhandler(req, res);
        });
    }
}

const expressApp = new App();
export default expressApp;
