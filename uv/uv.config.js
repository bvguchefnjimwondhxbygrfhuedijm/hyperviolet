// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/hyperviolet/uv/service/",
  bare: "https://8vk2d6-6987.csb.app/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/hyperviolet/uv/uv.handler.js",
  client: "/hyperviolet/uv/uv.client.js",
  bundle: "/hyperviolet/uv/uv.bundle.js",
  config: "/hyperviolet/uv/uv.config.js",
  sw: "/hyperviolet/uv/uv.sw.js",
};
