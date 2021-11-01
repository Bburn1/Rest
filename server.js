const express = require('express');
  app = express();
  routes = require('./routes.js');

  
routes(app);

app.listen(3330);


