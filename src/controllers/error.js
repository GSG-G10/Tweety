const path = require('path');

exports.notFound = (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
};

exports.serverError = (err, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', '..', 'public', '500.html'));
};