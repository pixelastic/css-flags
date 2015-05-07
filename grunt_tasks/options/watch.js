module.exports = {
  options: {
    livereload: false
  },
  scssToCss: {
    files: ['app/css/**/*.scss'],
    tasks: [
      'sass:build',
      'autoprefixer:build'
    ]
  },
  cssLivereload: {
    files: ['dist/main.css'],
    tasks: [],
    options: {
      livereload: true
    }
  },
  html: {
    files: ['app/index.html'],
    tasks: [
      'rsync:buildHTML'
    ],
    options: {
      livereload: true
    }
  }
};
