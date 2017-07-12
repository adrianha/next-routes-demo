const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

const localeRegExp = ':locale(id|en)?';

routes.add('index', `/${localeRegExp}`);
routes.add('search', `/${localeRegExp}/search`);
