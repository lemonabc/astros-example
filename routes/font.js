var router = require('express').Router(); // 新建一个 router
router.get('/font', function(req, res) {
    res.render('font', {
        title:'测试svg传字体功能'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router