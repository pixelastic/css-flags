module.exports = {
  options: {
    args: ['--verbose'],
    recursive: true,
    'delete': true
  },
  buildHTML: {
    options: {
      src: 'app/index.html',
      dest: 'dist'
    }
  },
  buildFonts: {
    options: {
      src: 'app/fonts',
      dest: 'dist'
    }
  },
  build: {
    options: {
      src: 'app/**',
      dest: 'dist',
      exclude: ['css/']
    }
  }
};
