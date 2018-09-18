Originally written for receiving HTTP notifications from the IoT Blockchain Service and forwarding them to participant applications via Websocket message. Below is an excerpt from that documentation.

## Setting up the WebSocket proxy

The IoT adapter does not support a native WebSocket connection. However, an HTTP to WS proxy is utilized for the Service Request Review application to receive an HTTP POST call from the IoT Adapter and send the call to client applications as a WebSocket message.

To complete an automatic setup of the WebSocket proxy, complete the following steps: 
1. Click the following button to provision your own instance of this proxy to IBM Cloud:

    [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://github.com/ibm-maximo-dev/http-to-ws-proxy)

2. After selecting Deploy to IBM Cloud, select deploy, and the default toolchain for IBM Cloud is set up. 
3. After set up completes, select `Delivery Pipeline` and then select the play button on the `Build Stage` card. A build and deploy is initialized, which will result in a URL. This URL is to your provisioned proxy.

You can then add the URL to the callback fabric via a POST to the IoT Blockchain Service. The Service Request Review application can simply connect to the same URL but via the WebSocket (ws) protocol to listen for messages.

To manually deploy WebSocket to IBM Cloud, complete the steps for deploying a node.js application. The steps are similar to deploying WebSocket. The steps are found here: https://console.bluemix.net/docs/runtimes/nodejs/getting-started.html#getting-started-tutorial, 

The repository to use for manual deployment is: https://github.com/ibm-maximo-dev/http-to-ws-proxy