const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);
const server = express();
const PORT = 3000;

app.prepare()
.then(() => {
  server
  .use('/:locale(id|en)?', function (req, res, next) {
    req.locale = req.params.locale ? req.params.locale : 'id';

    next();
  })
  .use(handler)
  .listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
