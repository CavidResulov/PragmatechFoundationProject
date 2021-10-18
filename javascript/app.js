// dordreqemli ededin reqemleri cemi

var value = 1298,
  sum = 0;

while (value) {
  sum += value % 10;
  value = Math.floor(value / 10);
}

console.log(sum);

// dordreqemli ededin reqemleri cemi

// prompt ad yazdir 10 defe

function adyazdir() {
  var text = "";
  var word;

  word = prompt("Adinizi daxil edin");
  for (i = 0; i < 10; i++) {
    text += "Ad:" + word + "\n";
  }
  alert(text);
}

adyazdir();

// prompt ad yazdir 10 defe
