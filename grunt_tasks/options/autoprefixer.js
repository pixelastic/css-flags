module.exports = {
  build: {
    expand: true,
    flatten: true,
    src: '<%= config.dist %>/main.css',
    dest: '<%= config.dist %>'
  }
};

