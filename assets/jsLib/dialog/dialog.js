module.exports = function(msg){
    console.log(msg);
    // $tpl_require('tpl/t1')
    return $tpl('tpl/t1') + '<img src="'+$res('jsimg.jpg')+'">';
}