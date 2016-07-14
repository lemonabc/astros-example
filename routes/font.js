/**
 * @title: 演示自动SVG转字体
 * @html: font
 * @ctime: 2015/10/09
 * @edittime: 2016-03-14 15:33:29
 * @wd: wheasy
 * @router: /font
 */
var router = require('express').Router(); // 新建一个 router
router.get('/font', function(req, res) {
    res.render('font', {
        title:'测试svg转字体功能'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router