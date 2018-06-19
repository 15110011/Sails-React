module.exports = function (grunt) {

  grunt.config.set('browserify', {
    dist: {
      files: {
        '.tmp/public/js/index.js': 'assets/js/index.js'
      },
      options: {
        transform: [
          ['babelify', { presets: ['env', 'react'] }]
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};
