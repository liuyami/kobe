const path = require('path');//引入path模块

function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
    outputDir: 'dist',

    publicPath: process.env.NODE_ENV === 'production'
        ? '/kobe/'
        : '/',

};