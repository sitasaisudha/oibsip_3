let f;
let v;
let inp;
let select;
function getdata() {
  let inn = document.getElementById("vals");
  inn.innerHTML = "";
  inp = document.getElementById("inpt");

  let i = inp.value;
  select = document.getElementById("sel");

  let s = select.value;
  console.log(s);

  if (s == "fahrenheit") {
    f = parseFloat(1.8 * i + 32).toFixed(1);
    console.log(f);
    inn.innerHTML += "Temperatuire in Fahrenheit =" + f;
  }
  if (s == "Celcius") {
    c = parseFloat((i - 32) / 1.8).toFixed(1);
    console.log(c);
    inn.innerHTML += "Temperatuire in Celcius =" + c;
  }
}
