module.exports = function (grunt) {
  'use strict';

  var config = require('config');
  var pkg = grunt.file.readJSON('package.json');
  for (var taskName in pkg.devDependencies) {
    if (taskName.indexOf('grunt-') > -1) {
      grunt.loadNpmTasks(taskName);
    }
  }

  var portConfig = config.get('portConfig');

  grunt.initConfig({
    pkg: pkg,
    connect: {
      options: {
        hostname: '127.0.0.1'
      },
      build: {
        options: {
          port: portConfig.build,
          base: 'dist'/*,
          livereload: portConfig.livereload,
          open: {
            target: 'http://127.0.0.1:<%= connect.build.options.port %>/index.html'
          }*/
        }
      }
    },
    sass: {
      dev: {
        options: {
          sourcemap: 'none',
          style: 'expanded',
          trace: true,
          require: ['susy', 'normalize-scss']
        },
        files: {
          'dist/app.css': 'sass/main.scss'
        }
      }
    },
    webpack: {
      build: {
        entry: "./src/index.tsx",
        output: {
          filename: "./dist/bundle.js",
        },

        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",

        resolve: {
          // Add '.ts' and '.tsx' as resolvable extensions.
          extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
        },

        module: {
          loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" }
          ],

          preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
          ]
        },

        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
          "react": "React",
          "react-dom": "ReactDOM"
        }
      }
    },
    watch: {
      styles: {
        files: [
          'sass/**/*.scss'
        ],
        tasks: ['sass:dev']
      },
      jsChanges: {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        tasks: ['webpack']
      }/*,
      sources: {
        options: {
          spawn: false ,
          livereload: portConfig.livereload
        },
        files: [
          'dist/bundle.js',
          'dist/app.css',
          'dist/index.html'
        ]
      }*/
    }
  });

  grunt.registerTask('default', ['sass', 'webpack', 'connect', 'watch']);

  grunt.registerTask('styles', ['sass', 'watch:styles'])
}