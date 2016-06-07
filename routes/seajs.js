/**
 * @title: 演示seajs
 * @html: seajs
 * @ctime: 2016-06-06 10:25:34
 * @edittime: 2016-06-06 10:25:38
 * @wd: wheasy
 * @router: /seajs
 */
var router = require('express').Router(); // 新建一个 router
router.get('/seajs', function(req, res) {
    res.render('seajs', {
        title:'seajs演示'
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
