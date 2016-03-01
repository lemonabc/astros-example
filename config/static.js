// 静态资源服务器配置
module.exports = {
    // debug: true,
    // 站点根目录
    port: 3201,
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
    fontUrl:'/img/fonts/',
    fontName:'cashierIconFont',
    fontVersion:'1',
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
        'astros-svgfont',
        'astros-css-less',
    ],
    // cdn:'',
    // 发布的配置
    rel: {
        // 发布时需要忽略的目录
        ignore: ['jslib', 'less'],
        // 发布时需要加载的插件，开发、调试时不会加载
        middlewares: [
            // 解析资源
            'astros-asset-parse',
            // 解析页面引用了哪些Web组件
            'astros-resource-refer',
            // JS、CSS内部对图片、字体的相对引用
            'astros-webcom-refer',

            // 支持二倍图自动转一倍图
            'astros-2ximg',
            // 发布时交错属性 
            'astros-img-interlace',
            // 解析JS
            'astros-js-process',
            //js之间的依赖
            'astros-js-dep',
            //js模版处理
            'astros-js-tpl',
            // 'astros-js-jshint',
            // 压缩JS
            'astros-js-minify',
            'astros-svgfont',
            // 解析LESS
            'astros-css-less',
            // 图片精灵
            'astros-css-sprite'
        ]
    }
}