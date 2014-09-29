/**
 * View Engine Configuration
 * (sails.config.views)
 *
 * Server-sent views are a classic and effective way to get your app up
 * and running. Views are normally served from controllers.  Below, you can
 * configure your templating language/framework of choice and configure
 * Sails' layout support.
 *
 * For more information on views and layouts, check out:
 * http://sailsjs.org/#/documentation/concepts/Views
 */

module.exports.views = {

    /****************************************************************************
     *                                                                           *
     * View engine (aka template language) to use for your app's *server-side*   *
     * views                                                                     *
     *                                                                           *
     * Sails+Express supports all view engines which implement TJ Holowaychuk's  *
     * `consolidate.js`, including, but not limited to:                          *
     *                                                                           *
     * ejs, jade, handlebars, mustache underscore, hogan, haml, haml-coffee,     *
     * dust atpl, eco, ect, jazz, jqtpl, JUST, liquor, QEJS, swig, templayed,    *
     * toffee, walrus, & whiskers                                                *
     *                                                                           *
     * For more options, check out the docs:                                     *
     * https://github.com/balderdashy/sails-wiki/blob/0.9/config.views.md#engine *
     *                                                                           *
     ****************************************************************************/

    engine: 'handlebars',


    /****************************************************************************
     *                                                                           *
     * Layouts are simply top-level HTML templates you can use as wrappers for   *
     * your server-side views. If you're using ejs or jade, you can take         *
     * advantage of Sails' built-in `layout` support.                            *
     *                                                                           *
     * When using a layout, when one of your views is served, it is injected     *
     * into the `body` partial defined in the layout. This lets you reuse header *
     * and footer logic between views.                                           *
     *                                                                           *
     * NOTE: Layout support is only implemented for the `ejs` view engine!       *
     *       For most other engines, it is not necessary, since they implement   *
     *       partials/layouts themselves. In those cases, this config will be    *
     *       silently ignored.                                                   *
     *                                                                           *
     * The `layout` setting may be set to one of the following:                  *
     *                                                                           *
     * If `false`, layouts will be disabled. Otherwise, if a string is           *
     * specified, it will be interpreted as the relative path to your layout     *
     * file from `views/` folder. (the file extension, ".ejs", should be         *
     * omitted)                                                                  *
     *                                                                           *
     ****************************************************************************/

    layout: 'layouts/layout',


    /****************************************************************************
     *                                                                           *
     * Using Multiple Layouts with EJS                                           *
     *                                                                           *
     * If you're using the default engine, `ejs`, Sails supports the use of      *
     * multiple `layout` files. To take advantage of this, before rendering a    *
     * view, override the `layout` local in your controller by setting           *
     * `res.locals.layout`. (this is handy if you parts of your app's UI look    *
     * completely different from each other)                                     *
     *                                                                           *
     * e.g. your default might be                                                *
     * layout: 'layouts/public'                                                  *
     *                                                                           *
     * But you might override that in some of your controllers with:             *
     * layout: 'layouts/internal'                                                *
     *                                                                           *
     ****************************************************************************/

    partials: 'partials',

    helpers: {
        debug: function (optionalValue) {
            if (optionalValue) {
                if (optionalValue == '*') {
                    console.log("Current Context");
                    console.log("====================");
                    console.log(this);
                } else {
                    console.log("Value");
                    console.log("====================");
                    console.log(optionalValue);
                }
            } else {
                console.log("Value is undefined");
            }
        },
        isInRole: function (role, user, options) {
            var roles = role.split(",");

            if (user && _.indexOf(roles, user.role) >= 0) {
                return options.fn(this);
            } else {
                return false;
            }
        },
        ifCond: function (v1, operator, v2, options) {
            switch (operator) {
                case '==':
                    return (v1 == v2) ? options.fn(this) : options.inverse(this);
                case '===':
                    return (v1 === v2) ? options.fn(this) : options.inverse(this);
                case '<':
                    return (v1 < v2) ? options.fn(this) : options.inverse(this);
                case '<=':
                    return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                case '>':
                    return (v1 > v2) ? options.fn(this) : options.inverse(this);
                case '>=':
                    return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                case '&&':
                    return (v1 && v2) ? options.fn(this) : options.inverse(this);
                case '||':
                    return (v1 || v2) ? options.fn(this) : options.inverse(this);
                default:
                    return options.inverse(this);
            }
        }
    }


};
