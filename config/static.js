// 静态资源服务器配置
module.exports = {
    // debug: true,
    // 站点根目录
    port: 3203,
    root: require('path').join(__dirname, '..'),
    // 页面存储路径
    // page: require('path').join(__dirname, '..', 'tpls'),
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
    // 交错属性开关
    //interlace:true,
    // 打开图片、字体资源MD5
    imgMd5 : true,
    jsImgRefer : {
        rule : '$.res(.__path__.)'
    },
    jsTpl: "$res=window.$res||{};$res['{name}']={};$res['{name}']['{file}'] = '{content}'",
    // 是否压缩CSS
    // compressCss:true,
    // 是否压缩JS
    // compressJs:true,
    // jsHint:{
    //     globals:'$',
    //     undef:true
    // },
    js: {
        // 模块对应的外网引用地址
        // source: {
        //     'jquery': 'http://cdn.baidu.com/jquery.js',
        // },
        // 不合并的组件
        unCombine: ['jquery', 'mo', 'zepto']
    },
    // 引用的插件，根据书写顺序加载
    middlewares: [
        'astros-asset-parse',
        'astros-resource-refer',
        'astros-2ximg',
        'astros-webcom-refer',
        'astros-js-dep',
        'astros-js-process',
        'astros-js-tpl',
        // 'astros-js-jshint',
        'astros-js-minify',
        {
            name:'astros-svgfont',
            config:{
                fontUrl:'/img/fonts/',
                fontName:'cashierIconFont',
                fontVersion:'1'
            }
        },
        'astros-css-less',
    ],
    // cdn:'',
    
}