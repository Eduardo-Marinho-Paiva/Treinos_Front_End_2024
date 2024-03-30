const btnBoom = document.querySelector("button.toggle-ball");
const valorX = [-600,-370,-370,0,0,370,370,600];
const valorY = [0,-200,200,-350,350,-170,170,0];
btnBoom.addEventListener("onclick",ativarBoom());
btnBoom.addEventListener("onclick",desativarBoom());

function ativarBoom(){
    for(let i = 0; i < 8 ; i++){
        document.querySelectorAll("div.ball")[i].style.transform = `translateX(${valorX[i]}%)  translateY(${valorY[i]}%) scale(3.5)`;
        document.querySelectorAll("div.ball")[i].style.backgroundColor = `red`;
        document.querySelectorAll("div.ball")[i].style.color = `white`;


    }
    //window.alert("Epa");
    document.querySelector("button.toggle-ball").style.display = "none";
    document.querySelector("button.toggle-ball.desativar").style.display = "flex";
    document.querySelector("button.toggle-ball.desativar").style.transform = "translateY(-135%)";
}

function desativarBoom(){
    document.querySelector("button.toggle-ball.desativar").style.display = "none";
    document.querySelector("button.toggle-ball").style.display = "flex";
    for(let i = 0; i < 8 ; i++){
        document.querySelectorAll("div.ball")[i].style.transform = `translateX(0%)  translateY(0%)`;
        document.querySelectorAll("div.ball")[i].style.backgroundColor = `black`;
        document.querySelectorAll("div.ball")[i].style.color = `black`;

    }

    
}

