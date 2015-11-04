module.exports = config:
  files:
    javascripts: joinTo: 'main.js'
    stylesheets: joinTo: 'main.css'
  plugins:
    sass:
      mode: 'ruby'
  server:
      run: yes
      port: 4001

