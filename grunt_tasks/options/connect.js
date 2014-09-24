'use strict';

module.exports = {
  options: {
    hostname: 'localhost'
  },
  build: {
    options: {
      port: 9400,
      livereload: true,
      base: '<%= config.dist %>'
    }
  }
};
