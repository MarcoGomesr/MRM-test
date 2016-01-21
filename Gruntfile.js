/* #############################################################################
 * Title: Gruntfile.js
 * Desc: The grunt build configuration file. 
 * Author: Marco Gomes
 * Date: 30th Nov 2015
 * License: MIT
 * #############################################################################
*/

module.exports = function(grunt) {  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
   
    jade: {
      compile: {
        files: [ {
          expand: true,
          cwd: "src/",      
          src: "*.jade",
          dest: "build/",      
          ext: ".html"
        } ]
      }
    },

     copy: {
      images: {
        expand: true,
        flatten: true,
        src: ['src/img/**'],
        dest: 'build/img',
        filter: 'isFile'
      }
    },

    watch: {
      options: {
        livereload: true
      },

       sass: {
          files: ['src/css/**.scss'],
          tasks: ['sass']
        },

        jade:{
          files: 'src/*.jade',
          tasks: ['jade']          
        }
    },

    sass: {                              // Task 
      dist: {                            // Target 
        options: {                       // Target options 
          style: 'compressed',
          sourcemap: 'none'
        },

        files: [{
          expand: true,
          cwd: 'src/css/',
          src: ['styles.scss'],
          dest: 'build/css',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build/css',
          src: ['style.css', '!*.min.css'],
          dest: 'build/css',
          ext: '.min.css'
        }]
      }
    }

  });

  grunt.registerTask('default',['copy', 'jade', 'sass', 'watch']);
};