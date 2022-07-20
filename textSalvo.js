const text = document.querySelector('.textarea')

const texto1 = document.querySelector('#textoSalvo')

function carregar() {
  let saved = sessionStorage.getItem('text')
  let list = JSON.parse(saved)
  
  texto1.innerHTML = "O texto aparece aqui" + list
}

function aqui(){
  console.log('oiiiii')
  carregar()
}