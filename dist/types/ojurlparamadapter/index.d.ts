import CoreRouter = require('../ojcorerouter');
declare class UrlParamAdapter<P extends {
    [key: string]: any;
} = {
    [key: string]: any;
}> {
    constructor();
    getRoutesForUrl(): Array<CoreRouter.Route<P>>;
    getUrlForRoutes(routes: Array<CoreRouter.Route<P>>): string;
}
export = UrlParamAdapter;
