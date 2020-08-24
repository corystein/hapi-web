const service = require("./service");

exports.register = async function (server) {
  await server.register(require("@hapi/basic"));
  await server.register(require("hapi-auth-cookie"));

  server.auth.strategy("simple", "basic", {
    validate: service.validate
  })
}

exports.pkg = {
  name: "auth"
}