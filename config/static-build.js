// 静态资源服务器配置
module.exports = {
    // debug: true,
    // 站点根目录
    port: 3200,
    root: require('path').join(__dirname, '..'),
    // 页面存储路径
    // page: require('path').join(__dirname, '..', 'pages'),
    // 自定发布目录
    // release: require('path').join(__dirname, '..', 'build'),
    // JS文件后缀名，默认为js
    // jsExt:'js',
    // CSS文件后缀名
    // cssExt:'less',
    // htmlExt : 'html',
    // JS 相关配置
    // cdnPrefix: '/productname',
    imgPath: '../..',
    // 打开图片、字体资源MD5
    // imgMd5 : true,
    jsImgRefer: {
        rule: '$.res(.__path__.)'
    },
    js: {
        // 模块对应的外网引用地址
        // source: {
        //     'jquery': 'http://cdn.baidu.com/jquery.js',
        // },
        // 不合并的组件
        unCombine: ['jquery', 'mo', 'zepto']
    },
    //是否发布html文件
    releaseHTML: true,
    // 发布时需要忽略的Assets下的目录
    ignore: ['jslib', 'less', 'jsLib'],
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
        {
            name: 'astros-img-interlace'
            // config:{}
        },
        // 'astros-cmd-dep',
        // 'astros-cmd-read',
        //js之间的依赖
        'astros-js-dep',
        // 解析JS
        'astros-js-process',
        //js模版处理
        {
            name:'astros-js-tpl',
            config:{
                    tpl: "$res=window.$res||{};$res['{name}']={};$res['{name}']['{file}'] = '{content}'"
            }
        },
        // 'astros-js-jshint',
        'astros-cmd-define',
        // 自动生成字体文件
        {
            name:'astros-svgfont',
            config:{
                fontUrl:'/fonts/',
                base64:true //移动端兼容性最好，pc不建议使用
            }
        },
        // 压缩JS
        {
            name:'astros-js-minify',
            config:{
                compress: true
            }
        },        
        // 解析LESS
        {
            name:'astros-css-less2',
            config:{
                compress: true
            }
        },
        'astros-css-sprite'
    ]
}