'use strict';
// More maintainable Gruntfiles: http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html

module.exports = function(grunt) {
  require('time-grunt')(grunt); // build statistics
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks); // load all Grunt tasks from node_modules
  var Helpers = require('./grunt_tasks/helpers'); // Grunt helpers file, make it easier to load config
  var config = Helpers.defaultConfig;
  var _ = grunt.util._;
  var sharedConfig = {
    config: {
      app: './app',
      tmp: './tmp',
      dist: './dist'
    }
  };

  config = _.extend(config, sharedConfig, Helpers.loadConfig('./grunt_tasks/options/'));
  grunt.initConfig(config); // load all configs, from the folder './grunt_tasks/options'
  grunt.loadTasks('grunt_tasks'); // load all tasks, from the folder './grunt_tasks'

  grunt.registerTask('default', ['build']);
};
