var http = require('http');
var url = require('url');

var finalize = function(response,responseBody) {
    response.write(responseBody);
    response.end();
}

module.exports = function(request,response, proxy,config) {
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;
    console.log(query.id);

    var options = {
        host: config.server.openweathermap.host,
        port: config.server.openweathermap.port,
        path: '/data/2.5/weather?id=' + query.id
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