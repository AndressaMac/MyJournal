const text = document.querySelector('.textarea')

const texto1 = document.querySelector('#textoSalvo')

function carregar() {
  let saved = sessionStorage.getItem('text')
  let list = JSON.parse(saved) // transforma string em json
  // "{"cahve": "valor"}" => {chave: 'valor'}
//  let stringfy = JSON.stringify(list[list.length - 1]) transforma objeto em string
    // {chave: 'valor'} => "{"cahve": "valor"}"

  texto1.innerHTML = list.data + '    ' + list.text
}

function aqui() {
  console.log('oiiiii')
  carregar()
}
