var nodeFS = require('fs');
var nodePath = require('path');
var ver_cache = {};
module.exports = {
    // env: 'development',
    // 项目名称
    name: 'astro',
    // 服务器端口,可以不写，默认以3100开始尝试
    //port: 3103,
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
    siteMap:{
        // 站点地图路径
        route: '/',
        des: {
            name: 'Astros示例站点',
            wd:'kumaw,ringcrazy',
            product:'wheasy',
            developer:'aimar'
        }        
    },
    // 是否自动启用静态资源服务器
    autoAssets: false,
    // 模板全局属性
    globalVariables: {
        //默认不写，以本机ip为主
        // cdn: 'http://127.0.0.1:3104/'
        ver: function() {
            return Date.now;
        }
    }
};