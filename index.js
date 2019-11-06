// Import stylesheets
import './style.css';

const tabela = document.querySelector("table");

const letras = {
   1:"A", 2:"B", 3:"C", 4:"D", 5:"E", 6:"F", 7:"G", 8:"H"}

function popula () {
  let tabuleiro = "";
  for(let i = 0; i <8; i++){
    tabuleiro += "<tr>";
      for(let j = 0; j <8; j++){
        if(j % 2 != 0)
          tabuleiro += `<td>${letras[i+1]}${j+1}</td>`;
        else
          tabuleiro += `<td class="branco">${letras[i+1]}${j+1}</td>`;
    }
  tabuleiro += "</tr>";
  }
  tabela.innerHTML = tabuleiro;
}

popula();



