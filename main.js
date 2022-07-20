const botao = document.querySelector('#salvar')
const data = document.querySelector('.data')
const text = document.querySelector('.textarea')

let resposta = document.querySelector('#resposta')
let list = []
let lista = document.querySelector('#lista')

botao.addEventListener('click', () => {
  salvar()
  //printList()
  //console.log(list)
})

function salvar() {
  let textarea = text.value
  let date = data.value
  list.push({ data: date, text: textarea })
  for (let index = 0; index < list.length; index++) {
    lista.innerHTML = list[index].data
  }
  let stringfy = JSON.stringify(list[list.length - 1])
  sessionStorage.setItem('text', stringfy)
}

/*/
function printList() {
  const lista = document.querySelector('#lista')
  list.forEach(elemento => {
    li.appendChild(document.createTextNode(`${elemento.data}`))
    lista.appendChild(li)
  })
}
*/

function abrirTexto() {
  window.location.href = 'textoSalvo.html'
  
}


