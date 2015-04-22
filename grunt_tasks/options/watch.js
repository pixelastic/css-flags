module.exports = {
  css: {
    files: ['app/css/flags/*.scss'],
    tasks: [
      'sass:build',
      'autoprefixer:build'
    ],
    options: {
      livereload: true
    }
  },
  html: {
    files: ['app/index.html'],
    tasks: [
      'rsync:build'
    ],
    options: {
      livereload: true
    }
  }
};
