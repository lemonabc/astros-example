/**
 * @title: astros示例页面
 * @ctime: 2015/10/09
 * @edittime: 2016-03-14 15:33:29
 * @wd: wheasy
 * @router: /
 */
var router = require('express').Router(); // 新建一个router
router.get('/', function(req, res) {
    res.render('index', {
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
