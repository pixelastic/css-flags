module.exports = {
  options: {
    livereload: true
  },
  css: {
    files: ['<%= config.app %>/css/*.css'],
    tasks: [
      'newer:sass:build',
      'newer:autoprefixer:build'
    ]
  },
  html: {
    files: ['<%= config.app %>/index.html'],
    tasks: [
      'rsync:build'
    ]
  }
};
