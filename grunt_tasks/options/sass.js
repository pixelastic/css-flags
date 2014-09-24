module.exports = {
  options: {
    style: 'expanded'
  },
  build: {
    files: [{
      expand: true,
      cwd: '<%= config.app %>/css',
      src: '*.scss',
      dest: '<%= config.dist %>',
      ext: '.css'
    }]
  }
};

