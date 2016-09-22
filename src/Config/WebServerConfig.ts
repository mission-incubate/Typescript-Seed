import { IWebServerConfig } from './BaseConfig';
import config from '../AppSettings';

export const WebServerConfig: IWebServerConfig = {
    ApiPort: config.PORT,
    IsHttpsEnabled: !!config.SSL_CERTIFICATE_PATH,
    HttpsCertificatepath: config.SSL_CERTIFICATE_PATH,
    HttpsKeypath: config.SSL_KEY_PATH,
    StaticFileConfig: {
        dotfiles: 'ignore',
        etag: false,
        extensions: ['htm', 'html'],
        index: ['index.html', 'index.htm'],
        maxAge: '1d',
        redirect: false,
        setHeaders: function (res: any, path: string, stat: string) {
            res.set('x-timestamp', Date.now().toString());
        }
    },
    CorsOptions: {
        origin: '*',
        methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Authorization', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
        exposedHeaders: [],
        credentials: true,
        maxAge: 3600
    },
    WebBasePath: config.WEB_APPLICATION_PATH,
    DocsBasepath: config.API_DOCUMENT_PATH
};
