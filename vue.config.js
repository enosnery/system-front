module.exports = {
    pages: {
        'index': {
            entry: './src/pages/login/login.js',
            template: 'public/index.html',
            title: 'Home',
            chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
        },
        'menu': {
            entry: './src/pages/menu/menu.js',
            template: 'public/index.html',
            title: 'Menu',
            chunks: [ 'chunk-vendors', 'chunk-common', 'menu' ]
        }
    }
}