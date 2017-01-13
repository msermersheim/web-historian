var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  fs.readFile(exports.paths.list, 'utf8', function(err, urls) {
    var list = urls.split('\n');
    callback(err, list);
  });
};

exports.isUrlInList = function(site, callback) {
  //read list of sites
  fs.readFile(exports.paths.list, 'utf8', function(err, urls) {
    var list = urls.split('\n');
    var isItThere = list.indexOf(site);
    callback(err, isItThere !== -1);
  });
};

exports.addUrlToList = function(site, callback) {
  fs.writeFile(exports.paths.list, site, 'utf8', callback);
};

exports.isUrlArchived = function(site, callback) {
  // to web/archived/sites
  fs.readdir(exports.paths.archivedSites, function(err, files) {
    var isItThere = files.indexOf(site);
    callback(err, isItThere !== -1);
  });
};

exports.downloadUrls = function(urlArray) {
  // fs.readFile(exports.paths.list, 'utf8', function(err, urls) {});
    //var list = urls.split('\n');
    //check if items in list are Archived:
    // for (var i = 0; i < list.length; i++) {
    //   if (!exports.isURLArchived(list[i], callback)) {


    
  
};
