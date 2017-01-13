var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs');
var helpers = require('./http-helpers');
var urlArray = ['example1.com', 'example2.com'];

exports.handleRequest = function (req, res) {

  if (req.method === 'GET') {
    // console.log('req.url: ', req.url);
    if (req.url === '/') {
      fs.readFile(archive.paths.siteAssets + '/index.html', function(err, data) {
        if (err) {
          console.log(err);
        } else {
          res.writeHead(200, helpers.headers);
          //body += data;
          res.end(data.toString());
        }
      });
    } else {
      //archive.isUrlArchived(archive.paths.archivedSites + req.url, callback);
      fs.readFile(archive.paths.archivedSites + req.url, function(err, files) {
        if (err) {
          console.log(err);
        } else {
          //res.writeHead(200, );

        }
      });
      //
    }

  }
  if (req.method === 'POST') {
    
  }
};
  
  //res.end(archive.paths.list);


// exports.serveAssets = function(res, asset, status) {
//   fs.readFile(archive.paths['siteAssets'] + '/' + asset, function(err, data) {
//     if (err) throw err;
//     res.writeHead(status, headers);
//     res.end(data.toString());


// UTILS
// var headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10, // Seconds.
//   'Content-Type': 'application/json'
// };

// exports.sendResponse = function(response, data, statusCode) {
//   statusCode = statusCode || 200;
//   response.writeHead(statusCode, headers);
//   response.end(JSON.stringify(data));
// };

// exports.collectData = function(request, callback) {
//   var data = '';
//   request.on('data', function(chunk) {
//     data += chunk;
//   });
//   request.on('end', function() {
//     callback(JSON.parse(data));
//   });
// };

// exports.makeActionHandler = function(actionMap) {
//   return function(request, response) {
//     var action = actionMap[request.method];
//     if (action) {
//       action(request, response);
//     } else {
//       exports.sendResponse(response, '', 404);
//     }
//   };
// };

// REQUEST-HANDLER
// var utils = require('./utils');

// var objectIdCounter = 1;
// var messages = [
//   // Note: an initial message is useful for debugging purposes.
//   /*
//   {
//     text: 'hello world',
//     username: 'fred',
//     objectId: objectIdCounter
//   }
//   */
// ];

// var actions = {
//   'GET': function(request, response) {
//     utils.sendResponse(response, {results: messages});
//   },
//   'POST': function(request, response) {
//     utils.collectData(request, function(message) {
//       message.objectId = ++objectIdCounter;
//       messages.push(message);
//       utils.sendResponse(response, {objectId: message.objectId}, 201);
//     });
//   },
//   'OPTIONS': function(request, response) {
//     utils.sendResponse(response, null);
//   }
// };

// exports.requestHandler = utils.makeActionHandler(actions);