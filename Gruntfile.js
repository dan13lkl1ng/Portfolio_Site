module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        width: 500,
                        suffix: '_xsmall',
                        quality: 20
                    },{
                        width: 800,
                        suffix: '_small',
                        quality: 30,
                    },{
                        width: 1000,
                        suffix: '_medium',
                        quality: 40,
                    },{
                        width: 1600,
                        suffix: '_large_1x',
                        quality: 40,
                    },{
                        width: 1900,
                        suffix:'_large_2x', 
                        quality: 70,
                    }]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png,jpeg}'],
                    cwd: 'images/',
                    dest: 'img/'
                }]
            }
        },

        clean: {
            dev: {
                src: ['img'],
            },
        },

        mkdir: {
            dev: {
                options: {
                    create: ['img']
                },
            },
        },

        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: '*.{gif,svg}',
                    cwd: 'images/',
                    dest: 'img'
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
