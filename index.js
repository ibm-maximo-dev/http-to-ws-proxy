/*
 * Copyright (c) 2018-present, IBM CORP.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * Initial Contribution: Alex Nguyen <nguyenal@us.ibm.com>
 */

const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const WebSocket = require("ws");
const http = require("http");

app.use(bodyParser.json());

const server = http.createServer(app);

app.post("/*", (req, res) => {
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

//create the websocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    if(message === "ping"){
      ws.send("pong")
    }
  });
});

let port = process.env.PORT || 8080;

//create the
server.listen(port, () =>
  console.log(`http to websocket running on port ${port}!`)
);
