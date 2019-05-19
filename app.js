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
    password: "oauth:6hf0e0mgiyjbqmopqdlfq7r59f2h4x"
  },
  channels: ["Zebrozkii"]
};
var client = new tmi.client(options);
client.connect();