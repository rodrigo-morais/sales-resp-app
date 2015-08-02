module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                strict: false,
                node: true,
                esnext: true,
                scripturl:true,
                globals: {
                    angular: true,
                    window: true
                }
            },
            all: ['app/**/*.js', 'tests/unit/**/*.js']
        },
        'babel': {
            options: {
                sourceMap: false,
                modules: 'amd'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: ['**/*.js'],
                    dest: 'dist/app',
                    ext: '.js'
                }]
            }
        },
        clean: ["dist/"],
        copy: {
            main: {
                cwd: './',
                src: 'index.html',
                dest: 'dist/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            main_js: {
                cwd: './',
                src: 'app/main.js',
                dest: 'dist/app/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            css: {
                cwd: './',
                src: 'assets/**',
                dest: 'dist/',
                expand: true
            },
            vendor: {
                cwd: './',
                src: 'vendor/**',
                dest: 'dist/',
                expand: true,
                filter: 'isFile'
            },
            templates: {
                cwd: './',
                src: 'app/**/templates/*.html',
                dest: 'dist/',
                expand: true
            },
            app_css: {
                cwd: './',
                src: 'app/**/css/*.css',
                dest: 'dist/',
                expand: true
            }
        },
        karma: {
          unit: {
            configFile: 'tests/karma.config.js',
            background: true,
            singleRun: false,
            files: [
              { src: ['test/unit/**/*.js'], served: true }
            ]
          }
        },
        watch: {
            files: [
                'app/**/*.*',
                'assets/**/*.css',
                'tests/unit/**/*.js',
                'index.html'
            ],
            tasks: [
                'jshint', 'karma', 'clean', 'babel', 'copy'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['jshint', 'karma', 'clean', 'babel', 'copy']);
};