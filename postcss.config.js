module.exports = {
  plugins: [
    require('postcss-easy-import')({ prefix: '_' }), // keep this first
    require('postcss-cssnext')({ /* ...options */ }) // so imports are auto-prefixed too
  ]
}
