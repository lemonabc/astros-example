// 静态资源服务器配置
module.exports = {
    // debug: true,
    // 站点根目录
    port: 3200,
    root: require('path').join(__dirname, '..'),
    //静态资源cdn地址，默认为本机
    //cdn: 'http://127.0.0.1:3104/',
    // 页面存储路径
    // page: require('path').join(__dirname, '..', 'tpls'),
    jsCom :require('path').join(__dirname, '..', 'app'),
    // 自定发布目录
    // release: require('path').join(__dirname, '..', 'build'),
    // JS文件后缀名，默认为js
    // jsExt:'js',
    // CSS文件后缀名
    // cssExt:'less',
    // htmlExt : 'html',
    // JS 相关配置
    // 静态资源在服务器分配的目录
    // cdnPrefix: '/astro',
    // 打开图片、字体资源MD5
    imgMd5 : true,
    jsImgRefer : {
        rule : '$res(.__path__.)'
    },
    js: {
        // 模块对应的外网引用地址
        // source: {
        //     'jquery': 'http://cdn.baidu.com/jquery.js',
        // },
        // 不合并的组件
        // jslib:''
        unCombine: ['jquery', 'mo', 'zepto']
    },
    // 引用的插件，根据书写顺序加载
    middlewares: [
        'astros-asset-parse',
        'astros-resource-refer',
        'astros-webcom-refer',
        'astros-2ximg',
        {
            name    : 'astros-css-less2',
            config  : {
                compress : false
            }
        },
        'astros-css-sprite'
    ]
}

