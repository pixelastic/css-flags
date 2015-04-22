'use strict';

module.exports = function(grunt) {

  grunt.registerTask('serve', [
    'build',
    'connect:build',
    'watch'
  ]);
};
