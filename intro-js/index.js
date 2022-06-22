document.querySelector('#t1').textContent = 'JavaScript - Introdução';
document.querySelector('#t2').textContent = 'Exemplificando algumas funcionalidades';

//apresenta uma mensagem e esconde o form de formularioLogin

/*
function bemVindo(){
    const nome = document.querySelector('#nomeUsuario').value;
    alert(`Olá ${nome}! Seja bem-vindo(a)!`);
    document.getElementById('formularioLogin').style.display = 'none';
}
*/

function mudaCorFundo(){
   const menu = document.querySelector('#coresFundo');
   const cor = menu.options[menu.selectedIndex].value;
   document.body.style.background = cor;
}