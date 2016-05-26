// 静态资源服务器配置
module.exports = {
    // debug: true,
    // 站点根目录
    port: 3200,
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
        rule : '$res(.__path__.)'
    },
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
        'astros-cmd-dep',
        'astros-cmd-read',
        'astros-js-dep',
        'astros-js-process',
        {
            name:'astros-js-tpl',
            config:{
                    tpl: "$res=window.$res||{};$res['{name}']={};$res['{name}']['{file}'] = '{content}'"
            }
        },
        'astros-cmd-define',
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
                compress: false
            }
        },
        {
            name    : 'astros-css-less2',
            config  : {
                compress : false
            }
        },
        'astros-css-sprite'
    ]
}

