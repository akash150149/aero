// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      // You can optionally pass options here
    }),
    require('autoprefixer'),
  ],
};
