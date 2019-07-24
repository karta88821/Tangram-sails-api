/**
 * HomepageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: function(req, res) {
        return res.view('pages/homepage', {
            currentDate: (new Date()).toString()
        })
    }

};

