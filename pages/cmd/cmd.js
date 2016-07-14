// import abc from '../font/font.js'

var a = $res('a.jpg')

console.log(a);

require('dialog')('hello cmd');
// form
var cls_form = require('form');

require('plugina')()



class f extends cls_form{
    say (){
        console.log('', this.name);
    }
}

(new f).say()

var evens = [1,2,3,4,5];
// Expression bodies
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var fives = [];
// Statement bodies
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

// Lexical this
var bob = {
  _name: "Bob",
  _friends: ['tick'],
  printFriends() {
    this._friends.forEach(f =>{
      console.log(this._name + " knows " + f)
  });
  }
};


console.log('odds', odds);
console.log('fives', fives);

bob.printFriends();

// debugger

// alert('你好')