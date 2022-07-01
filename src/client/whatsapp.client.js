const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const WhatsappClient = new Client();

WhatsappClient.on('qr', (qr) => {
  // Generate and scan this code with your phone
  console.log('QR RECEIVED', qr);
  qrcode.generate(qr, { small: true });
  console.log({ socketEvents });
});

WhatsappClient.on('ready', () => {
  console.log('Client is ready!');
});

WhatsappClient.on('message', async (msg) => {
  if (msg.body === '!ping') {
    msg.reply('pong');
  }

  if(msg.body === 'Inscribeme') {
    const chat = await msg.getChat();
    console.log('==> Save next chat ID', chat);
    msg.reply('Te has inscrito a la lista de notificaciones');
  }


});

WhatsappClient.initialize();

module.exports = WhatsappClient;
