module.exports = {
  css: {
    files: ['<%= config.app %>/css/*.scss'],
    tasks: [
      'sass:build',
      'autoprefixer:build'
    ],
    options: {
      livereload: true
    }
  },
  html: {
    files: ['<%= config.app %>/index.html'],
    tasks: [
      'rsync:build'
    ],
    options: {
      livereload: true
    }
  }
};
