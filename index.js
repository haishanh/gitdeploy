var spawnSync = require('child_process').spawnSync;
var path = require('path');

var cmd = path.resolve(__dirname, 'lib', 'deploy');

function deploy(opt) {
  if (opt && opt.directory && opt.remote && opt.branch)  {
    var args = ['-d', opt.directory, '-r', opt.remote, '-b', opt.branch];
    spawnSync(cmd, args, {stdio: 'inherit'});
  } else {
    console.log('Please supply all needed option properties');
  }
}

module.exports = deploy;
