module.exports = {
  options: {
    style: 'expanded',
    require: './app/css/flags/sass_math.rb'
  },
  build: {
    files: [{
      expand: true,
      cwd: 'app/css/',
      src: '*.scss',
      dest: 'dist',
      ext: '.css'
    }]
  }
};

