/**
 * View Engine Configuration
 * (sails.config.views)
 *
 * Server-sent views are a secure and effective way to get your app up
 * and running. Views are normally served from actions.  Below, you can
 * configure your templating language/framework of choice and configure
 * Sails' layout support.
 *
 * For details on available options for configuring server-side views, check out:
 * https://sailsjs.com/config/views
 *
 * For more background information on views and partials in Sails, check out:
 * https://sailsjs.com/docs/concepts/views
 */

module.exports.views = {

  /***************************************************************************
  *                                                                          *
  * Extension to use for your views. When calling `res.view()` in an action, *
  * you can leave this extension off. For example, calling                   *
  * `res.view('homepage')` will (using default settings) look for a          *
  * `views/homepage.ejs` file.                                               *
  *                                                                          *
  ***************************************************************************/

  // extension: 'ejs',

  /***************************************************************************
  *                                                                          *
  * The path (relative to the views directory, and without extension) to     *
  * the default layout file to use, or `false` to disable layouts entirely.  *
  *                                                                          *
  * Note that layouts only work with the built-in EJS view engine!           *
  *                                                                          *
  ***************************************************************************/

 extension: 'swig',
 getRenderFn: function () {

   const cons = require('consolidate');
   const swig = require('swig');
   const extras = require('swig-extras');
   
   swig.setFilter('round', function (input) {
     let num = parseInt(input);
     return Math.round(num);
   });

   swig.setFilter('numberFormat', function (input) {
     let num = parseInt(Number(input));
     if (num != null && num) {
       return num.toFixed(0).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
     } else {
       return "0";
     }
   });

   //extra
   extras.useFilter(swig, 'split');
   
   cons.requires.swig = swig;
   
   return cons.swig;
 },

 layout: false


};
