const Path = require("path");

module.exports = {
    server: {
        port: 8080,
        host: "localhost",
        /*
        routes: {
            files: {
                relativeTo: Path.join(__dirname, "public")
            },
        },
        */
    },
    register: {
        plugins: [{
                plugin: require("@hapi/inert"),
            },
            {
                plugin: require("@hapi/vision"),
                options: {
                    engines: {
                        html: require("handlebars")
                    },
                    relativeTo: __dirname,
                    path: "templates",
                    layout: true,
                    layoutPath: "templates/layouts",
                    partialsPath: "templates/partials",
                    helpersPath: "templates/helpers",
                    isCached: process.env.NODE_ENV != "development",
                }
            },
            {
                plugin: require('./auth')
            },
            {
                plugin: require('./app/routes'),
                options: {
                    relativeTo: __dirname,
                }
            }
        ]
    }
}