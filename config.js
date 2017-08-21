module.exports = {
  source: {
    html: 'src/pug/',
    stylesheets: 'src/sass/',
    javascripts: {
      path: 'src/js/',
      fileName: 'script',
    }
  },
  build: {
    html: './',
    stylesheets: './static/css/',
    javascripts: {
      path: './static/js/',
    }
  },
  browsers: [
    '> 1%',
    'last 2 versions',
    'iOS 8',
    'Firefox ESR',
    'Opera 12.1'
  ]
};
