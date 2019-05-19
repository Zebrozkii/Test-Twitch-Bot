var tmi = require('tmi.js');

var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "JimbobsBot",
    password: "oauth:spxhtz95thjijvfrc9ro3bjbn2l9qb"
  },
  channels: ["zebrozkii"]
};
var client = new tmi.client(options);
client.connect();