var app = require('./app');


var server = app.listen(process.env.PORT || 3000, function() {
  console.log('DataPackagist is being served.');
});
