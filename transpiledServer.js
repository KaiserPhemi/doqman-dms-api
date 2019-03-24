"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// third-party libraries
// instantiate express
var app = (0, _express.default)();
var port = 5555; // parse incoming requests

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
})); // disable logging server info

app.disable('x-powered-by');
app.get('/', function (req, res) {
  res.send('Hello Node!');
}); // start app and listen on parsed port

app.listen(port, function (error) {
  if (error) {
    throw error;
  }

  console.log("Server started on port ".concat(port));
});
