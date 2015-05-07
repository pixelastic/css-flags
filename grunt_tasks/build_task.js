'use strict';

module.exports = function(grunt) {

  grunt.registerTask('build', [
    'mkdir', // Create dist dir
    // HTML
    'rsync:buildHTML',
    // FONTS
    'rsync:buildFonts',
    // CSS
    'sass:build',
    'autoprefixer'
  ]);
};
