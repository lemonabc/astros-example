/**
 * @title: 演示cmd插件
 * @html: about-us
 * @ctime: 2015/10/09
 * @edittime: 2016-03-14 15:33:29
 * @wd: wheasy
 * @router: /cmd
 */
var router = require('express').Router(); // 新建一个 router
router.get('/cmd', function(req, res) {
    res.render('cmd', {
        title:'首页'
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
