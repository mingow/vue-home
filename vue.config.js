module.exports = {
  devServer:{
    historyApiFallback: true,
    proxy: 'http://172.18.100.52:8050',
  },
  transpileDependencies: [
    'vuetify'
  ]
}
