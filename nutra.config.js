module.exports = function( config ) {
    config.set({
        frameworks: ['nutra-jasmine'],
        files: [
            './test/specs/**/*.js',
            './src/node/parser/**/*.js',
            './src/node/generateReport.js',
            './src/samples/**/*.js',
            './src/language/node/parser/**/*.js'
        ],
        preprocessors: {
            './test/specs/**/*.js': ['nutra-babel'],
            './src/node/parser/**/*.js': ['nutra-babel', 'nutra-coverage'],
            './src/node/generate-report.js': ['nutra-babel', 'nutra-coverage'],
            './src/samples/**/*.js': ['nutra-babel'],
            './src/language/**/*.js': ['nutra-babel']
        },
        reporters: ['nutra-coverage'],
        babelOptions: {
            configFile: './.babelrc'
        },
        coverageOptions: {
            dir : './test',
            reporters: [
                { type: 'html', subdir: 'coverage' }
            ]
        }
    })
}
