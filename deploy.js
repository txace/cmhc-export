var util = require('mis-util');
var config = require('./config.ignore');
//var Q = require('Q');

var options = {
   sysname: '/c1/FRSH',
   connect: {
      host: 'gccmhc',
      user: 'tim',
      password: config.user
   },
   cron: {
      user: 'datamgr',
      pass: config.cron
   },
   usc_path: {
      local: './'
   }
};

var mis = util(options);

console.log('deploying to: ' + options.sysname);

mis.script.install('./usc/sql-export.usc');
