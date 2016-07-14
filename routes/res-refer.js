/**
 * @title: 资源引用示例
 * @html: res-refer
 * @ctime: 2016-07-13 11:31:12
 * @edittime: 2016-07-13 11:31:16
 * @wd: wheasy
 * @router: /res-refer
 */
var router = require('express').Router(); // 新建一个 router
router.get('/res-refer', function(req, res) {
    res.render('res-refer', {
        title:'资源引用示例'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router

// astro.page({
//     router  : '',
//     tpl     : '',
//     data    :{
//         title:  ''
//     }
// });

// astro.page('/', 'index', {});
