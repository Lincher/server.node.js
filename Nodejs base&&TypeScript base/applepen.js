var pen = 'Pen';
var apple = 'Apple';
var pineapple = 'Pineapple';
var ppap = Ugh(Ugh(pen, pineapple), Ugh(apple, pen));

function Ugh(a, b) {
  return a + ' ' + b;
}

console.log(ppap);
//output:Pen Pineapple Apple Pen
