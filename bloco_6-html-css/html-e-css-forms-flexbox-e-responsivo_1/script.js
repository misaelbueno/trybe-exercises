let siglas = [
"AC","AL",
"AP","AM",
"BA","CE",
"DF","ES",
"GO","MA",
"MT","MS",
"MG","PA",
"PB","PR",
"PE","PI",
"RJ","RN",
"RS","RO",
"RR","SC",
"SP","SE","TO"
]

let estados = [
  "Acre", "Alagoas",
  "Amapá", "Amazonas", 
  "Bahia", "Ceará ",
  "Distrito Federal", "Espírito Santo", 
  "Goiás", "Maranhão", 
  "Mato Grosso", "Mato Grosso do Sul",
  "Minas Gerais", "Pará", 
  "Paraíba", "Paraná", 
  "Pernambuco", "Piauí", 
  "Rio de Janeiro", "Rio Grande do Norte", 
  "Rio Grande do Sul", "Rondônia", 
  "Roraima", "Santa Catarina ",
  "São Paulo", "Sergipe", 
  "Tocantins" 
]
for (let key in estados) {
  let allStates = document.getElementById("all-states")
  let option = document.createElement("option")
  option.innerHTML = estados[key]
  option.value = siglas[key]
  allStates.appendChild(option)
}


function validateData(data) {
  if (data[2] === '/' && data[5] === '/') {
    const day = data.substr(0, 2) // (indice, nº caracteres posteriores)
    const month = data.substr(3, 2)
    const year = data.substr(6, 4)
    if ((day > 0 && day <= 31) ** (month > 0 && month <= 12) && (year > 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkData() {
  const inputData = document.querySelector(".date");
  let data = inputData.value;
  const userData = validateData(data);
  if(!userData && data.length) {
    inputData.value = "";
    return alert("Data inválida");
    return false;
  }
  return userData;
}

const btnSubmit = document.querySelector("#btnSubmit")
btnSubmit.addEventListener("click", checkData)
btnSubmit.addEventListener("click", eventDefault)

function eventDefault(event) {
  event.preventDefault()
  let formData = document.querySelector(".form-data");
  let formulario = document.querySelectorAll("input")
  for (let index = 0; index < formulario.length; index += 1) {
    let div = document.createElement('div')
    div.innerHTML = formulario[index].value;
    formData.appendChild(div)
    // console.log(formulario[index].value)
  }
}




