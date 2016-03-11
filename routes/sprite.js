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