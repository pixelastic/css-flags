module.exports = config:
  paths:
    watched: ['app']
  files:
    javascripts: joinTo: 'main.js'
    stylesheets: joinTo: 'main.css'
  plugins:
    sass:
      mode: 'ruby'
      options: ['-r./app/styles/_helpers/geometry_helper.rb']
    babel:
      presets: ['es2015']
      ignore: []
      pattern: /\.(js)$/
    postcss:
      processors: [
        require('autoprefixer')(['last 8 versions'])
        require('postcss-round-subpixels'),
      ]
  server:
    run: yes
    port: 4001

