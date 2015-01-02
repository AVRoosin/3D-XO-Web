/**
 * Created by Русин on 02.01.2015.
 */
module.exports = function (grunt) {

    grunt.initConfig({
        clean: ["build"]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean']);
};