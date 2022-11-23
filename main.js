import '@picocss/pico'
import './style.css'


const consultar_git = document.querySelector('#lado-esquerdo-form');
const input_nome_git = consultar_git.nomeGit;
const lado_dados = document.querySelector('#dadosLadoDireito');
const btn_consultar_git = document.querySelector('#btnBuscarGit')

consultar_git.addEventListener('submit',function(evento){
    evento.preventDefault() // anula comportamento padrão de envio do form ao clicar no botão
  //  ativaLoader(true) 
    consultarGit(input_nome_git.value) // invoca a função passando o nome digitado por parâmetro
})


async function consultarGit(git) {
    let response = await fetch(`https://api.github.com/users/${git}`)
    let dadosGit = await response.json()
    if (dadosGit.erro) {
      lado_dados.innerHTML = `
        <div class="erro">Git não encontrado</div>
      `
    } else {
      lado_dados.innerHTML = `
      <img src="${dadosGit.avatar_url}" alt="" width="120px"  >
      <label for="">${dadosGit.name}</label>
      <a href="${dadosGit.html_url}">Perfil no GitHub  <img src="./imgs/seta.png" width="20px"><a href="">
    `
    }
   // ativaLoader(false)
  }

