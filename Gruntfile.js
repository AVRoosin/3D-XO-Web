/**
 * Created by Русин on 02.01.2015.
 */
module.exports = function (grunt) {

    grunt.initConfig({
        clean: ["build"],
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: [
                            'data/*',
                            'index.html'
                        ],
                        dest: 'build/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/index.html': 'build/index.html'
                }
            }
        }
//        requirejs: {
//            compile: {
//                options: {
//                    baseUrl: ".",
//                    removeCombined: true,
//
//                }
//            }
//        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
//    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['clean', 'copy', 'htmlmin']);
};