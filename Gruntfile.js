/*
  Code Partly From Udacity Responsive Images Course
*/

/* Use 'grunt' to execute the following:
   1. Removes images & src/images directories - ('grunt clean')
   2. Makes new images & scr/images directories - ('grunt mkdir')
   3. Minifies & Inlines CSS (style.css) & JS (projects.js) - ('grunt inline')
   4. Minifies HTML - ('grunt htmlmin')
   5. Resizes & optimizes images from images_original to images
      directory - ('grunt responsive_images')
   6. Further optimizes images in images directory - ('grunt imageoptim')
   7. Copies processed images from images directory to scr/images. Copies fixed
      images from images_original into images & src/images - ('grunt copy')
*/

module.exports = function(grunt) {

  grunt.initConfig({

    /* Clear out the images & src/images directories if they exists */
    clean: {
      dev: {
        src: ['images','src/images'],
      },
    },

    /* Generate the images & src/images directories if they are missing */
    mkdir: {
      dev: {
        options: {
          create: ['images', 'src/images']
        },
      },
    },

    /*  Minify and inline style.css & projects.js
     * Mark with ?__inline=true
     * https://github.com/chyingp/grunt-inline */
    inline: {
      dist: {
        options: {
          cssmin: true,
          uglify: true
        },
        src: 'src/index.html',
        dest: 'index.html'
      }
    },

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
          'index.html': 'index.html' // destination : source
        }
      }
    },

    /* Resize and optimize images with ImageMagick
    https://github.com/andismith/grunt-responsive-images */
    responsive_images: {
      logo: { // first set for logo image
        options: {
          engine: 'im',
          sizes: [
          {
            width: 400,
            suffix: '',
            quality: 75
          },
          {
            width: 300,
            suffix: '',
            quality: 75
          },
          {
            width: 200,
            suffix: '',
            quality: 70
          }]
        },

        /* Set source image file types and directory.
           Set destination image directory */
        files: [{
          expand: true,
          src: ['veryhandsome.{gif,jpg,png,jpeg}'],
          cwd: 'images_original/',
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

        /* Set source image file types and directory.
           Set destination image directory */
        files: [{
          expand: true,
          src: ['thumbnail*.{gif,jpg,png,jpeg}'],
          cwd: 'images_original/',
          dest: 'images/'
        }]
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
        src: ['images']
      }
    },

    /* Copy processed images from images to src/images
       Copy fixed images from images_original to src/images
       Copy fixed images from images_original to images */
    copy: {
      processed: {
        files: [{
          expand: true,
          flatten: true,
          src: 'images/*.{gif,jpg,png}',
          dest: 'src/images/'
        }]
      },
      fixed1: {
        files: [{
          expand: true,
          flatten: true,
          src: 'images_original/fixed/*.{gif,jpg,png}',
          dest: 'src/images/'
        }]
      },
      fixed2: {
        files: [{
          expand: true,
          flatten: true,
          src: 'images_original/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'inline', 'htmlmin', 'responsive_images', 'imageoptim', 'copy']);

};
