module.exports = {
  options: {
    args: ['--verbose'],
    recursive: true,
    'delete': true
  },
  build: {
    options: {
      src: 'app/**',
      dest: 'dist',
      exclude: ['css/']
    }
  }
};
