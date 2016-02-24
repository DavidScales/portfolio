/*
  Code Partly From Udacity Responsive Images Course

  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({

    /* Minify my main html file, index.html
    https://github.com/gruntjs/grunt-contrib-htmlmin */
    htmlmin: {
      dist: {
        options: {
          removeComments: true, // remove comments from html
          removeCommentsFromCDATA: true, // remove comments from <script> and <style>
          removeScriptTypeAttributes: true, // remove unnecessary <script> attributes
          removeStyleLinkTypeAttributes: true, // remove unnecessary <style> attributes
          minifyJS: true, // minify inline js
          collapseWhitespace: true, // remove whitespace
          conservativeCollapse: true // preserve a single whitespace, to prevent potential errors
        },
        files: {
          'index.html': 'index_inlined.html' // destination : source
        }
      }
    },

    /*  Minify and internalize style.css into <style> in index.html
     * Mark href with ?__inline=true
     * https://github.com/chyingp/grunt-inline */
    inline: {
      dist: {
        options: {
          cssmin: true
        },
        src: 'index_src.html',
        dest: 'index_inlined.html'
      }
    },

    /* Optimize images with ImageOptim
    Run after responsive_images for further optimizations.
    Leave jPeg mini false, its not installed (its $20!).
    You can set imageAlpha to true, it works on png's only and is lossy.
    ImageOptim is already true (all are true by default)
    https://github.com/JamieMason/grunt-imageoptim */
    imageoptim: {
      myTask: {
        options: {
          jpegMini: false,
          imageAlpha: false
        },
        src: ['images', 'images_src/fixed']
      }
    },

    /* Resize and optimize images with ImageMagick
    https://github.com/andismith/grunt-responsive-images */
    responsive_images: {
      logo: { // first set for logo image
        options: {
          engine: 'im',
          sizes: [{
            width: 400,
            suffix: '',
            quality: 50
          },
          {
            width: 350,
            suffix: '',
            quality: 50
          },
          {
            width: 300,
            suffix: '',
            quality: 50
          },
          {
            width: 250,
            suffix: '',
            quality: 50
          },
          {
            width: 200,
            suffix: '',
            quality: 50
          },
          {
            width: 150,
            suffix: '',
            quality: 50
          },
          {
            width: 100,
            suffix: '',
            quality: 50
          }]
        },

        /* Set source image file types and directory. Set destination image directory */
        files: [{
          expand: true,
          src: ['veryhandsome.{gif,jpg,png,jpeg}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      },
      thumbnails: { // second set for project thumbnails
        options: {
          engine: 'im',
          sizes: [{
            width: 300,
            suffix: '',
            quality: 50
          },
          {
            width: 400,
            suffix: '',
            quality: 50
          },
          {
            width: 500,
            suffix: '',
            quality: 50
          },
          {
            width: 600,
            suffix: '',
            quality: 50
          },
          {
            width: 700,
            suffix: '',
            quality: 50
          },
          {
            width: 800,
            suffix: '',
            quality: 50
          },
          {
            width: 900,
            suffix: '',
            quality: 50
          },
          {
            width: 1000,
            suffix: '',
            quality: 50
          }]
        },

        /* Set source image file types and directory. Set destination image directory */
        files: [{
          expand: true,
          src: ['*thumbnail.{gif,jpg,png,jpeg}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'inline', 'htmlmin', 'responsive_images', 'imageoptim']);

};
