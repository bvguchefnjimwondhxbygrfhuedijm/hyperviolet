// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/hyperviolet-us-server/uv/service/",
  bare: "https://we.internet-slackers.us/bare/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/hyperviolet-us-server/uv/uv.handler.js",
  client: "/hyperviolet-us-server/uv/uv.client.js",
  bundle: "/hyperviolet-us-server/uv/uv.bundle.js",
  config: "/hyperviolet-us-server/uv/uv.config.js",
  sw: "/hyperviolet-us-server/uv/uv.sw.js",
};
