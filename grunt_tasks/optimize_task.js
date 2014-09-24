'use strict';

module.exports = function(grunt) {

  // FONTS
  grunt.registerTask('optimize:fonts:full', [
    'filerev:fullFonts' // Copy and version fonts
  ]);


  // CSS
  grunt.registerTask('optimize:css:dev', [
    'sass:dev', // Compile all scss into dist-dev
    'rsync:devBowerCss', // Adds all bower dependencies to dist-dev
    'autoprefixer:dev' // Autoprefix everything
  ]);

  grunt.registerTask('optimize:css:full', [
    'sass:full', // Compile all scss to tmp directory
    'rsync:fullBowerCss', // Copy all bower files to tmp directory
    'cssrevfonts', // Update references to versioned fonts files
    'autoprefixer:full', // Autoprefix all files
    'newer:cssmin:full', // Minify and combine in one file in dist
    'filerev:fullCss' // Version output file
  ]);
  grunt.registerTask('optimize:css', 'optimize:css:full');

  // HTML
  grunt.registerTask('optimize:html', function(target) {
    target = target || 'full';
    grunt.task.run([
      'htmlmin:' + target
    ]);
  });

};
