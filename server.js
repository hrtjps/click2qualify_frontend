var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");
app = express();
app.use(serveStatic(__dirname + "/dist"));
console.log(__dirname);
var port = process.env.PORT || 8000;
app.listen(port);
console.log("server started " + port);
