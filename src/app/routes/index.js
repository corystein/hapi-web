const Path = require("path");
const Joi = require("@hapi/joi");

exports.register = (server, options) => {
    server.route([
        ////////////////////////////////////////
        // START : Default Routes
        ////////////////////////////////////////
        {
            method: 'GET',
            path: '/public/{path*}',
            config: {
                auth: false,
                description: 'Static assets',
                handler: {
                    directory: {
                        path: 'app/public',
                        index: false,
                        listing: false
                    }
                }
            }
        },
        /*
        {
            method: "GET",
            path: "/{p*}",
            handler: {
                directory: {
                    path: Path.resolve("app/public"),
                },
            },
        },
        */
        {
            method: "GET",
            path: "/",
            handler: function (request, h) {
                return h.view("pages/home/index");
            },
        },
        {
            method: "GET",
            path: "/about",
            handler: function (request, h) {
                return h.view("pages/home/about");
            },
        },
        {
            method: "GET",
            path: "/contact",
            handler: function (request, h) {
                return h.view("pages/home/contact");
            },
        },
        ////////////////////////////////////////
        // END : Default Routes
        ////////////////////////////////////////

        ////////////////////////////////////////
        // END : Error Routes
        ////////////////////////////////////////
        {
            method: ['GET', 'POST'],
            path: '/{any*}',
            handler: (request, h) => {
                const accept = request.headers.accept

                if (accept && accept.match(/json/)) {
                    return Boom.notFound('Fuckity fuck, this resource isn’t available.')
                }

                return h.view('pages/errors/404').code(404)
            }
        },
        ////////////////////////////////////////
        // BEGIN : Admin Routes
        ////////////////////////////////////////

        {
            method: "GET",
            path: "/admin",
            handler: function (request, h) {
                return h.view("pages/admin/index");
            },
        }
        ////////////////////////////////////////
        // END : Admin Routes
        ////////////////////////////////////////
    ]);
};

exports.pkg = {
    name: "home"
}