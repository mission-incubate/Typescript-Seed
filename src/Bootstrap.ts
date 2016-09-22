import { WebServer, Request, Response, NextFunction } from './Server/Core';
import { WebServerConfig } from './Config/Index';
//import * as route from './Server/Router';
//import { ApiResponse, IBaseDto } from './Server/Common';

export class Bootstrap {
    public Server: WebServer;
    public Init(): WebServer {
        let server = new WebServer(WebServerConfig);
        server.ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
            var out: any = {
                Data: null,
                PageContext: null,
                Error: { Code: null, Message: err.message, Stack: process.env.NODE_ENV === 'development' ? err.stack : null }
            };
            console.error(out);
            res.status(404).json(out);
        };
        server.Init();
        server.AddStaticFileRouting(WebServerConfig.WebBasePath, __dirname + WebServerConfig.WebBasePath, WebServerConfig.StaticFileConfig);
        server.AddStaticFileRouting(WebServerConfig.DocsBasepath, __dirname + WebServerConfig.DocsBasepath,
            WebServerConfig.StaticFileConfig);
        //server.AddApiRouting('/', route);
        this.Server = server;
        return this.Server;
    }
    public Start(): void {
        this.Server.Start();
    }
    public Stop(): void {
        this.Server.Stop();
    }
};
