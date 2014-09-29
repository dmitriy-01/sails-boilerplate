/**
 * SiteController
 *
 * @description :: Server-side logic for managing sites
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    /**
     * `SiteController.index()`
     */
    index: function (req, res) {
        res.view({
            layout: 'layout-site'
        });
    }
};

