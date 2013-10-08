'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
      livereload: {
         options: { livereload: true },
         files: ['api-factory/**/*']
      },
    },
    nodemon: {
      dev: {
          options: {
              file: 'lib/node-api-factory-demo.js',
              ignoredFiles: ['README.md', '!node_modules/node-api-factory/lib/*.js','node_modules/**'],
              watchedExtensions: ['js','json','proxy'],
              watchedFolders: ['api-factory', 'test'],
              delayTime: 1,
              cwd: __dirname
          }
      },
      exec: {
          options: {
              exec: 'less'
          }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');

  // Default task.
  grunt.registerTask('default', ['nodemon']);

  grunt.registerTask('test', ['jshint', 'nodeunit']);
};
