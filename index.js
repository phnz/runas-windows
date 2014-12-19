var path = require('path'),
    bin = path.join(__dirname,'bin'),
    exec = require('child_process').exec;


module.exports = function(cmd, callback) {

  exec('"'+path.join(bin,'runas.cmd')+'" '+cmd, false, function(error) {

      callback(error);

  });

}
