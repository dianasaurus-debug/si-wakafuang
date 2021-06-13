module.exports = {
  devServer: {
    port: 9090
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/si-wakafuang/'
      : '/'

}
