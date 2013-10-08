var http = require('http');
var url = require('url');

var finalize = function(response,responseBody) {
    response.write(responseBody);
    response.end();
}

module.exports = function(request,response, proxy,config) {
    var urlParts = url.parse(request.url, true);
    var urlComponents = urlParts.pathname.split('/');
    var clone = urlComponents.slice(0);
    clone.reverse();
    console.log(clone[0]);

    var options = {
        host: config.server.openweathermap.host,
        port: config.server.openweathermap.port,
        path: '/data/2.5/weather?id=' + clone[0]
    };

    var responseBody = '';
    var partRequest = http.request(options, function(partResponse) {
        response.statusCode = partResponse.statusCode;
        response.headers = partResponse.headers;
        partResponse.on('data', function (chunk) {
            responseBody += chunk;
        });

        partResponse.on('end', function() {
            finalize(response,responseBody);
        });
    });

    partRequest.on('error', function(e) {
        finalize(response, e.message);
    });

    partRequest.end();
}