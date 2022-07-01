const express = require('express');

/* Project */
const ClientRouter = require('./routes/client.router');

const app = express();

app.use(express.json());

const WhatsappClient = require('./client/whatsapp.client');

app.use((req, res, next) => {
  console.log('==> Aplying middleware');
  req.whatsappClient = WhatsappClient;
  next();
});

app.get('/', function(req, res) {
  res.send('hello world');
});

app.use('/api/v1', ClientRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`[APP] Listening on port ${PORT}`);
});
