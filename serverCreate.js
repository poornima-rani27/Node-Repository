var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.end('Hello World');

    //res.write(req.url);
    //res.end();

    //var queryString = url.parse(req.url, true).query;
    //var dates = queryString.year + "  " + queryString.month;
    //res.end(dates);

    //fs.readFile('FirstNodeHtmlFile.html', function (err, data) {
    //    res.writeHead(200, { 'Content-Type': 'text/html' });
    //    res.write(data);
    //    console.log("Incoming connection " + req.url);
    //    res.end();
    //});

    var queryString = url.parse(req.url, true);
    //console.log(queryString);
    //console.log(queryString.pathname);
    var fileName = "." + queryString.pathname;

    if (fileName == "./") {
        fileName = "./FirstNodeHtmlFile.html";
    }
    fs.readFile(fileName, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 not found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

console.log("Server connection established on port 8080.....");