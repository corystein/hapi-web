"use strict";

const Hapi = require("@hapi/hapi");
const Glue = require("@hapi/glue");
const Path = require("path");
const Bcrypt = require("bcrypt");

// Configuration and plugins
const manifest = require("./manifest");

const options = {
  relativeTo: __dirname,
};

/*
const users = {
  admin: {
    username: 'admin',
    password: '$2b$10$uEZgDxr/yGpaV0ppV2ebRe5ZaFhifO21VnL6AkNQ2hceW8kP4hPSC', // 'secret'
    name: 'Administrator',
    id: '1'
  }
};


const basicAuth = require("@hapi/basic");

const validate = async (request, username, password) => {

  const user = users[username];
  //console.log(user);
  if (!user) {
    return {
      credentials: null,
      isValid: false
    };
  }

  const isValid = await Bcrypt.compare(password, user.password);
  const credentials = {
    id: user.id,
    userName: user.username,
    name: user.name
  };

  console.log(credentials);

  return {
    isValid,
    credentials
  };
};
*/

const init = async () => {
  // Using Glue create a server
  const server = await Glue.compose(manifest, options);

  // Logging
  console.log(`Environment: ${process.env.NODE_ENV}`);

  /*
  server.auth.strategy('simple', 'basic', {
    validate
  });
  */
  //server.auth.strategy('formAuth', 'form');

  //var routes = require('./routes');
  //server.route(routes.routes);

  /*
  server.route({
      method: "GET",
      path: "/",
      handler: function (request, h) {
        return h.view("pages/home/index");
      },
    }, {
      method: 'GET',
      path: '/login',
      handler: function (request, h) {

        return ` <html>
                    <head>
                        <title>Login page</title>
                    </head>
                    <body>
                        <h3>Please Log In</h3>
                        <form method="post" action="/login">
                            Username: <input type="text" name="username"><br>
                            Password: <input type="password" name="password"><br/>
                        <input type="submit" value="Login"></form>
                    </body>
                </html>`;
      },
      options: {
        auth: false
      }
    }, {
      method: 'POST',
      path: '/login',
      handler: async (request, h) => {

        const {
          username,
          password
        } = request.payload;
        const account = users.find(
          (user) => user.username === username
        );

        if (!account || !(await Bcrypt.compare(password, account.password))) {

          return h.view('/login');
        }

        request.cookieAuth.set({
          id: account.id
        });

        return h.redirect('/');
      },
      options: {
        auth: {
          mode: 'try'
        }
      }
    }

  );


  server.route({
    method: "GET",
    path: "/admin",
    options: {
      auth: 'simple'
    },
    handler: function (request, h) {
      return 'Yeah! This message is only available for authenticated users!';
    }
  });
  */

  /*
  server.route({
    method: "GET",
    path: "/login",
    handler: function (request, h) {
      return h.view("pages/login/index");
    },
  });

  server.route({
    method: "POST",
    path: "/login",
    handler: function (request, h) {
      return h.view("pages/login/index");
    },
  });
  */

  /*
  server.route({
    method: "GET",
    path: "/{p*}",
    handler: {
      directory: {
        path: Path.join(__dirname, "public"),
      },
    },
  });
  */

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();