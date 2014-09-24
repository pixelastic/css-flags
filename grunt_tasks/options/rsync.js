module.exports = {
  options: {
    args: ['--verbose'],
    recursive: true,
    'delete': true
  },
  build: {
    options: {
      src: '<%= config.app %>/*',
      dest: '<%= config.dist %>',
      exclude: ['css/']
    }
  }
};
