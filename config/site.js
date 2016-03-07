var nodeFS = require('fs');
var nodePath = require('path');
var ver_cache = {};
module.exports = {
    // env: 'development',
    // 项目名称
    name: 'astro',
    // 服务器端口
    port: 3100,
    // 站点根目录
    root: require('path').join(__dirname, '..'),
    // 页面存储路径
    // page: require('path').join(__dirname, '..', 'tpls'),
    proxy: {
        '/aj': {
            hostname: 'www.baidu.com',
            port: 80,
            url: '/',
            headers: {}
        }
    },
    /*des: {
        name: 'astro',
        wd:'苏宁',
        product:'尚尉',
        developer:'张保坤'
    },*/
    // 是否自动启用静态资源服务器
    autoAssets: false,
    // 模板全局属性
    globalVariables: {
        // cdn: 'http://127.0.0.1:3104/'
        theme:'',
    }
};