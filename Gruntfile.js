module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
          dist: {
            src: [
              'js/libs/*.js',
              'js/global.js'
            ],
            dest: 'js/build/production.js',
          }
        },
        uglify: {
          build: {
            src: 'js/build/production.js',
            dest: 'js/build/production.min.js'
          }
        },
        // imagemin: {
        //   dynamic: {
        //     files: [{
        //       expand: true,
        //       cwd: 'images/',
        //       src: ['**/*.{png,jpg,gif}'],
        //       dest: 'images/build/'
        //     }],
        //   }
        // },
        compass: {
          dist: {
            options: {
              cssDir: 'styles',
              sassDir: 'sass',
              imagesDir: 'images',
              javascriptsDir: 'scripts',
              force: true
            }
          }
        },
        cssmin: {
          minify: {
            expand: true,
            cwd: 'styles',
            src: ['*.css', '!*.min.css'],
            dest: 'styles',
            ext: '.min.css'
          }
        },
        watch: {
          options: {
            livereload: true,
            nospawn : true,
          },
          scripts: {
            files: ['js/*.js', '**/js/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
              spawn: false,
            },
          },
          css: {
            files: ['css/*.scss', '**/css/*.scss'],
            tasks: ['sass'],
            options: {
              spawn: false,
            },
          },
          html: {
            files: ['**/index.html', 'index.html']
          },
          service: {
            files: [
            'src/sass/partials']
          }
        },
        sass: {
          dist: {
            options: {
              style: 'expanded'
            },
            files: [
              {dest: 'css/build/global.css', src: 'css/global.scss'},
              {dest: 'day036/css/warpspeed.css', src: './day036/css/warpspeed.scss'},
            ]
          }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default',['concat','uglify',/*'imagemin',*/'watch','sass']);
}
