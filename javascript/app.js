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

// prompt 3 condition

function yasyazdir() {
  var age = prompt("Yasinizi daxil edin");
  if (age < 30) {
    var age = Number(age);
    alert(Math.pow(age, 2));
  } else if (age > 30 && age < 40) {
    var age = Number(age);
    alert(age % 10);
  } else if (age < 0 && age > 100) {
    alert("Duzgun melumat daxil etmemisiniz");
  }
}

yasyazdir();

// prompt 3 condition
