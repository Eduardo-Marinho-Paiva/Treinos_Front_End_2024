const botoes_movies = window.document.querySelectorAll('button.container-movie-element-button');
const btn1 = botoes_movies[0], btn2 = botoes_movies[1], btn3 = botoes_movies[2];

btn1.addEventListener("click",mais_info());
btn2.addEventListener("click",mais_info());
btn3.addEventListener("click",mais_info());

function mais_info(indice){
    const btn = document.querySelectorAll('button.container-movie-element-button')[indice];
    const texto = document.querySelectorAll('p.container-movie-element-text')[indice];
    btn.style.marginBottom = "-5px";
    btn.textContent = 'Fechar';
    if(texto.style.display == 'flex'){
        texto.style.display = 'none';
        btn.style.marginBottom = "20px";
        btn.textContent = 'Saiba Mais';
    }else{
        texto.style.display = 'flex';
    }

}
