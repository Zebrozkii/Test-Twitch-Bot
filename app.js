//bot setup

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
//bot setup end


//bot commands start
client.on('chat', function(channel, user, message, self){
  // client.action("zebrozkii ", user ['display-name'] + " You are a Trash Can");
});

client.on('connected', function (address , port){
 client.action("zebrozkii", "Hello Im Testing my bot");
});

client.on("chat", (channel, user, message, self)=>{
  if(user.mod || user['usertype'] === 'mod'){
    client.action("zebrozkii", `You suck ${user.username}`);
  }
});

client.on("chat", (channel, user, message, self)=>{
  if(message=="!op"){
    client.action("zebrozkii","https://na.op.gg/summoner/userName=zebrozkii");
  }
});
client.on("chat", (channel, user, message, self)=>{
  if(message=="!twitter"){
    client.action("zebrozkii","https://twitter.com/zebrozkii");
  }
});
client.on("chat", (channel, user, message, self)=>{
  if(message=="!youtube"){
    client.action("zebrozkii","https://www.youtube.com/user/Zebrozkii");
  }
});

setInterval(()=>{
  client.say("zebrozkii", "Thanks for stopping by dont forget to follow the stream :)");
}, 3600000);

client.on("chat", (channel, user, message, self)=>{
  if(message=="!commands"){
    client.action("zebrozkii","!youtube , !twitter , !op, !hello");
  }
});
client.on("chat", (channel,user, message, self)=>{
  if(message=="!hello"){
    client.action("zebrozkii", "Hello! Welcome to the stream hope you enjoy your stay. Remember to follow the rules ;)");
  }
});



//bot commands end

