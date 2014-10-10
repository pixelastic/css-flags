module.exports = {
  options: {
    style: 'expanded',
    require: './sass_math.rb'
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

