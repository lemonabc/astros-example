// 静态资源服务器配置
module.exports = {
    // debug: true,
    // 站点根目录
    port: 3200,
    root: require('path').join(__dirname, '..'),
    // 静态资源服务器地址，默认为本机
    // host: 'http://127.0.0.1:3104/',
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
    // 打开图片、字体资源MD5
    imgMd5 : true,
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
        'astros-img-interlace',
        // 'astros-cmd-dep',
        // 'astros-cmd-read',
        'astros-cmd-define', 
        //js之间的依赖
        'astros-js-dep',
        // 解析JS
        {
            name: 'astros-js-process',
            config: {
                ignore_require: ['jquery']
            }
        },
        //js 增加define方法
        {
            name: 'astros-js-tpl',
            config: {
                tpl: '$tpl(\'{name}\',\'{content}\')',
                define: ['(function(win) {',
                    'var _tpl = {};',
                    'window.$tpl = function(key, ctx) {',
                        'if (ctx) {',
                            '_tpl[key] = ctx;',
                            'return;',
                        '}',
                        'return _tpl[key];',
                    '}',
                '}(window));',
                ].join('\n')
            }
        },
        // 'astros-js-jshint',
        // 压缩JS
        'astros-js-babel',
        'astros-js-minify',
        // 解析LESS
        'astros-css-less2',
        // 自动生成字体文件
        'astros-svgfont',
        'astros-css-sprite',
        'astros-css-clean'
    ]
}