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
        Question.find({}).exec(function findCB(err, questions) {
            if (err)  res.view({errors: err});

            res.view({
                questions: questions
            });
        });
    }
};

