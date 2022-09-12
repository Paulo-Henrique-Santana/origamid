var videoGames = ["Switch", "PS4", "XBOX"];
console.log(videoGames);

var ultimoItem = videoGames.pop();
console.log(ultimoItem);
console.log(videoGames);

videoGames.push("3DS");
console.log(videoGames);

for (var numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 5;
}

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function(item, index, array) {
  console.log(item, index, array);
});

var numero = 0;
var maximo = 10;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}