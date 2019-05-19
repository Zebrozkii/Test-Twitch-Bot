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
client.on('chat', function(channel, user, message, self){
  client.action("zebrozkii ", user ['display-name'] + " You are a Trash Can");
});

client.on('connected', function (address , port){
 client.action("zebrozkii", "Hello Im Testing my bot");
});