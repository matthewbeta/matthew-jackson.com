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
          '*.html', '*.yml', 'assets/js/**.js',
          '_posts/**', '_includes/**', '!**/css/**'
        ],
        tasks: ['jekyll:dev' , 'styleinjector']
      }
    },
    uglify: {
      all: {       
        files: {
          'JS/min/main.min.js': ['JS/jquery-2.0.2.min.js', 'JS/main.js']
        }
      }
    },
    jekyll: {
      dev: {
        drafts: true,
        future: true
      }
    },
    compass: {
      dev: {
        options: {              
          sassDir: ['sass'],
          cssDir: ['css'],
          environment: 'production'
        }
      }
    },
    connect: {
      server: {
        options: {
          base: '_site/',
          port: 9009
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.server.options.port %>/'
      }
    },
    copy: {
      css : {
        files: [ 
          {
            src: 'css/style.css',
            dest: '_site/css/style.css'
          }
        ] 
      },
      js : {
        files: {
          '_site/JS/min/*':'JS/min/*.js'
        }
      }
    },
    styleinjector: {
      files: {
        src: [
          '_site/css/**/*.css' , 
          '_site/css/**/*.css',
          '_site/**/*.html'
        ]
      },
      options: {
          watchTask: true,
          urlTransforms: {
              remove : "_site",
          },
      },
    },
  });
  
  // INCLUDE ALL THE GRUNT TASKS
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-style-injector');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jekyll');
 
  // COPY STYLES TO _SITE
  grunt.registerTask('copyCSS', ['compass', 'copy:css', 'styleinjector']);
   // COPY JS
  grunt.registerTask('copyJS', ['uglify', 'copy:js']);
  // Default task.
  grunt.registerTask('default', [
    'jekyll:dev',
    'copyCSS',
    'connect:server',
    'open:server',
    'watch'
  ]);
 
};