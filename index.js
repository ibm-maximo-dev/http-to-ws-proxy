const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const WebSocket = require("ws");

//create the websocket server
const wss = new WebSocket.Server({ port: 8081 });

app.use(bodyParser.json());

app.post("/*", (req, res) => {
  console.log(req.body);
  //res.send(req.body);
  //broadcast message over websocket
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      //console.log(req.body);
      client.send(JSON.stringify(req.body));
    }
  });

  //send ok status
  res.status = 200;
  res.end();
});

//create the
app.listen(8082, () => console.log("http to websocket running on port 8082!"));
