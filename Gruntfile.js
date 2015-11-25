module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        watch: {
            changeTasks: {
                files: ['*.tex'],
                tasks: ['shell']
            }
        },
        shell: {
            options: {
                stderr: false
            },
            target: {
                command: './cv.sh'
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);

};