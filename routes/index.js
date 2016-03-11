/**
 * @title: 主页
 * @ctime: 2015/10/09
 * @edittime: 2015/10/09
 * @ui: 彭倩
 * @ux: 刘倩茹
 * @wd: 何伟,万虎
 * @router: /
 */
var router = require('express').Router(); // 新建一个 router
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
