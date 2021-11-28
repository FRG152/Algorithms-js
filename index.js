function findLongestWordLength(str) {
  let num = 0;
  let strLength = '';
  let arrStr = str.split(' ');
  arrStr.map(function (valorInicial, indice, array) {
    if (num < valorInicial.length) {
      num = valorInicial.length;
      strLength = valorInicial;
    }
  });
  console.log(num)
  console.log(strLength);
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

/*
num = 0, valorInicial = 3, 0 < 3 = num = valorInicial, num = 3.
num = 3, valorInicial = 5, 3 < 5 = num = valorInicial, num = 5.
num = 5, valorInicial = 5, 5 < 5 = num = valorInicial, num = 5.
num = 5, valorInicial = 3, 5 < 3 = num = valorInicial, num = 5.
num = 5, valorInicial = 6, 5 < 6 = num = valorInicial, num = 6.

num = 0, valorInicial = 3, 0 < 3 = num = valorInicial, num = 3.
strLength = "The".
num = 3, valorInicial = 5, 3 < 5 = num = valorInicial, num = 5.
strLength = "quick".
num = 5, valorInicial = 5, 5 < 5 = num = valorInicial, num = 5.
strLength = "quick".
num = 5, valorInicial = 3, 5 < 3 = num = valorInicial, num = 5.
strLength = "quick".
num = 5, valorInicial = 6, 5 < 6 = num = valorInicial, num = 6.
strLength = "jumped".
*/
