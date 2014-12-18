var path = require('path'),
    bin = path.join(__dirname,'bin'),
    exec = require('child_process').exec;

var params = function(options,callback) {
  callback = callback || function(){};
  options = options || {};

  if (typeof options === 'function'){
    callback = options;
    options = {};
  }

  if (typeof options !== 'object'){
    throw 'Invalid options parameter.';
  }

  return {options:options, callback:callback};
}

module.exports = function(cmd, options, callback) {

  var p = params(options,callback);
  exec('"'+path.join(bin,'runas.cmd')+'" '+cmd, p.options, p.callback);

}
