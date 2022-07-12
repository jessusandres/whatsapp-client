const { Router } = require('express');

const ClientRouter = Router();

ClientRouter.get('/', function (req, res) {
  res.json({
    ok: true,
    message: 'Hello World from base API!',
  });
});

// const clientID = '51991817883@c.us';

ClientRouter.post('/sendMessage', async function (req, res) {
  let sent;
  const { whatsappClient, body: { message, phoneNumber } } = req;

  const clientId = `51${phoneNumber}@c.us`;

  // const phoneExits = await whatsappClient.isRegisteredUser(clientId).then((isRegistered) => isRegistered);
  const phoneExits = true;

  if (phoneExits) {
    console.log('User is registered');
    sent = await new Promise((resolve, reject) => {
      whatsappClient.sendMessage(clientId, message)
        .then(() => {
          resolve(true)
        })
        .catch((err) => {
          console.log({ err });
          resolve(false)
        })
    });
  }


  res.json({
    sent: true,
    message: sent ? 'Message sent' : 'Message not sent',
  });
});

module.exports = ClientRouter;
