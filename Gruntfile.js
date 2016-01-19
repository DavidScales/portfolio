/*
  Code Partly From Udacity Responsive Images Course

  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 2400,
            suffix: 'large_2x',
            quality: 50
          },
          {
            width: 1200,
            suffix: 'large_1x',
            quality: 50
          },
          {
            width: 1500,
            suffix: 'medium_2x',
            quality: 50
          },
          {
            width: 750,
            suffix: 'medium_1x',
            quality: 50
          },
          {
            width: 1000,
            suffix: 'small_2x',
            quality: 50
          },
          {
            width: 500,
            suffix: 'small_1x',
            quality: 50
          },
          {
            width: 400,
            suffix: 'tiny_2x',
            quality: 50
          },
          {
            width: 400,
            suffix: 'tiny_1x',
            quality: 50
          }]
        },

        /* Set source image file types and directory. Set destination image directory */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,jpeg}'],
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
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
