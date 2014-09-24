/* functions to load grunt tasks from separate files to simplify config
 * http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
 */

'use strict';

var grunt = require('grunt');
var _ = grunt.util._;
var Helpers = {};

Helpers.defaultConfig = {
  pkg: grunt.file.readJSON('./package.json'),
  env: process.env
};

var taskRequirements = {};

Helpers.whenTaskIsAvailable = function (taskName) {
  // baseName of 'coffee:compile' is 'coffee'
  var baseName = taskName.split(':')[0];
  var reqs = taskRequirements[baseName];
  var isAvailable = Helpers.isPackageAvailable(reqs);

  return isAvailable ? taskName : undefined;
};

Helpers.isPackageAvailable = function (pkgNames) {
  if (typeof pkgNames === 'string') {
    pkgNames = [pkgNames];
  }
  return _.every(pkgNames, function (pkgName) {
    return !!Helpers.defaultConfig.pkg.devDependencies[pkgName];
  });
};

Helpers.loadConfig = function (path) {
  var glob = require('glob');
  var object = {};
  var key;

  glob.sync('*', { cwd: path }).forEach(function (option) {
    key = option.replace(/\.js$/, '');
    object[key] = require('../' + path + option);
  });

  return object;
};

module.exports = Helpers;
