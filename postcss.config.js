const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: [ __dirname + '/layouts/**/*.html' ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
    plugins: [
        require('tailwindcss')(__dirname + '/tailwind.config.js'),
        require('autoprefixer'),

        ...process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : []
  ]
}
