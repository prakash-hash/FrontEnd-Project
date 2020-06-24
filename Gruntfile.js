'use strict'

module.exports = function(grunt){
    //Define the configuration of all files
    //time-grunt to show us how much time is taken
    require('time-grunt')(grunt);

    //Automatically loads required grunt-task

    require('jit-grunt')(grunt);

    //defining all configuration of the tasks
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
    });

    grunt.registerTask('css',['sass']);
    grunt.registerTask('default',['browserSync','watch']);
};