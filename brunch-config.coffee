module.exports = config:
  files:
    javascripts: joinTo: 'main.js'
    stylesheets: joinTo: 'main.css'
  plugins:
    sass:
      mode: 'ruby'
      options: ['-r/home/tim/local/www/projects/css-flags/app/styles/_flags/sassmath.rb']
  server:
      run: yes
      port: 4001

