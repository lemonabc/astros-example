/**
 * @title: 演示自动生成雪碧图
 * @html: sprite
 * @ctime: 2015/10/09
 * @edittime: 2016-03-14 15:33:29
 * @wd: wheasy
 * @router: /sprite
 */
var router = require('express').Router(); // 新建一个 router
router.get('/sprite', function(req, res) {
    res.render('sprite', {
        title:'测试雪碧图'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router