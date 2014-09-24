'use strict';

module.exports = function(grunt) {

  grunt.registerTask('build', [
    'mkdir', // Create dist dir
    'rsync:build', // Copy files
    'sass:build', // Compile SCSS
    'autoprefixer' // Autoprefix everything
  ]);
};
