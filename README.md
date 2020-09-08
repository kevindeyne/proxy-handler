# Proxy handler
Arduina's proxy handler, high throughput memory service that pulling proxies can hit without impacting the server api.

Core to the idea of the proxies used is that there is only one way communication, no communication ever gets pushed to the proxies, they only pull stuff in. This way the owner of the proxy retains full control over the communication.

However, it provides a problem - the proxy still needs to know what to execute. It can pull it from the server, but does not know when to pull. Most of the time there will be nothing to do. However a slow pull rate would mean that it would take quite some time to see tests springing into action. 

To solve this, we're decoupling the server with the proxy pulling. A node server will serve as go-between and handles all the proxy pulls. This is and must remain an extremely light-weight, low-latancy call. 

It's goal is to simply inform the proxy if it's time to pull from the server or not. It holds, in memory, that status of each team vs if it should pull. 
