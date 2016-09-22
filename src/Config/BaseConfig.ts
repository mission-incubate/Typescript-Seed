/****************************************************************************************
************************ Web Server Config Interface ************************************
****************************************************************************************/
import { Response } from 'express-serve-static-core';

export interface IStaticFileConfig {
    dotfiles: string;
    etag: boolean;
    extensions: Array<string>;
    index: boolean | Array<string>;
    maxAge: string;
    redirect: boolean;
    setHeaders: (res: Response, path: string, stat: any) => any;
}

export interface IWebServerConfig {
    ApiPort: number;
    IsHttpsEnabled?: boolean;
    HttpsCertificatepath?: string;
    HttpsKeypath?: string;
    CorsOptions?: ICorsOptions;
    StaticFileConfig?: IStaticFileConfig;
    WebBasePath?: string;
    DocsBasepath?: string;
}

//Ref: https://www.npmjs.com/package/cors#demo
export interface ICorsOptions {
    origin?: boolean | string | Function | Array<string | RegExp> | RegExp;
    methods?: string | Array<string>;
    allowedHeaders?: string | Array<string>;
    exposedHeaders?: string | Array<string>;
    credentials?: boolean;
    maxAge?: number;
}
