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
            title: 'Menu - Systema',
            chunks: [ 'chunk-vendors', 'chunk-common', 'menu' ]
        },
        'users': {
            entry: './src/pages/users/users.js',
            template: 'public/index.html',
            title: 'Usuários',
            chunks: [ 'chunk-vendors', 'chunk-common', 'menu' ]
        }
    }
}