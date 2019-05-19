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
    username: "Jimbooby-Bot",
    password: "oauth:hqhd39eblwslorgtu4dklllzx77j10"
  },
  channels: ["Zebrozkii"]
};
var client = new tmi.client(options);
client.connect();