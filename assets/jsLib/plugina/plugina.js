module.exports = function() {
    var div = document.createElement('div');
    div.innerHTML = $tpl('plugina/plugina');
    document.body.appendChild(div);
}