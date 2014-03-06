module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      // WATCH THE SASS FILES FOR CHNAGES AND COMPILE WITH COMPASS
      compass: {
        files: ['sass/**/*.{scss,sass}'],
        tasks: ['copyCSS']
      },
      //WATCH ALL THE JEKYLL FILES EXCEPT CSS
      jekyll: {
        files: [
          // capture all except css
          '**/*.html', '*.yml', '**/*.md', '!_site/**', '!*.css'
        ],
        tasks: ['jekyll:dev' , 'copy:js', 'copy:css']
      },
      js: {
        files: ['js/**.js'],
        tasks: ['copy:js'],
      }
    },

    jekyll: {
      dev: {},
      staging: {
        config: "_config_staging.yml",
        dest: "./_staging"
      }
    },
    compass: {
      local: {
        options: {              
          sassDir: ['sass'],
          cssDir: ['css'],
          environment: 'production'
        }
      }
    },

    copy: {
      css : {
        files: [ 
          {
            expand: true,
            cwd: 'css/',
            src: '*.css',
            dest: '_site/css/',
            flatten: true,
            filter: 'isFile',
          }
        ]
      },
      js: {
        files: [ 
          {
            expand: true,
            cwd: 'js/',
            src: '*.js',
            dest: '_site/js/',
            flatten: true,
            filter: 'isFile',
          }
        ]
      }
    },

    browser_sync: {
      files: {
        src: [
          '_site/css/*.css' , 
          '_site/**/*.html', 
          '_site/js/*.js'
        ]
      },
      options: {
          watchTask: true,
          server: {
            baseDir: '_site',
          },
          urlTransforms: {
              remove : "_site",
          },
          ghostMode: {
                scroll: true,
                links: true,
                forms: true
            },
      },
    },
    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'assets/images_src/',                 // Src matches are relative to this path
          src: ['*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'assets/images/'                  // Destination path prefix
        }]
      }
    }

  });
  
  // INCLUDE ALL THE GRUNT TASKS
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
 
  // COPY STYLES TO _SITE
  grunt.registerTask('copyCSS', ['compass', 'copy:css']);

  // RUN JEKYLL USING STAGING SETTINGS
  grunt.registerTask('staging', ['jekyll:staging']);

  // Default task.
  grunt.registerTask('default', [
    'imagemin',
    'jekyll:dev',
    'copyCSS',
    'copy:js',
    'browser_sync',
    'watch',
  ]);
 
};