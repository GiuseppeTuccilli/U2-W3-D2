const formKey = "form-key";

let idArray = [];
const nome = document.getElementById("nome");
const precedente = document.getElementById("precedente");

const salva = document.getElementById("salva");

const elimina = document.getElementById("elimina");

/*const idArray = JSON.localStorage.getItem(formKey)
  ? JSON.parse(JSON.getItem(formKey))
  : [];*/

if (localStorage.getItem(formKey)) {
  idArray = JSON.parse(localStorage.getItem(formKey));
} else {
  idArray = [];
}

if (idArray.length > 0) {
  precedente.innerText = idArray[idArray.length - 1];
} else {
  precedente.innerText = "nessun valore";
}

const aggiorna = function () {
  localStorage.setItem(formKey, JSON.stringify(idArray));
  const newArray = JSON.parse(localStorage.getItem(formKey));
  if (newArray.length > 0) {
    precedente.innerText = newArray[newArray.length - 1];
  } else {
    precedente.innerText = "nessun valore";
  }
};

const salvaId = function () {
  idArray.push(nome.value);
  aggiorna();
};

const eliminaId = function () {
  idArray.pop();
  aggiorna();
};

salva.addEventListener("click", salvaId);
elimina.addEventListener("click", eliminaId);

// TIMER

const timeKey = "time-key";
let t;
if (sessionStorage.getItem(timeKey)) {
  t = parseInt(sessionStorage.getItem(timeKey));
} else {
  t = 0;
}

const timeText = document.getElementById("timerText");
const timerOn = function () {
  sessionStorage.setItem(timeKey, t.toString());
  timeText.innerText = t.toString();
  t++;
  setTimeout(timerOn, 1000);
};

timerOn();
