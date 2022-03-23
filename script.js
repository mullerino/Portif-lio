var troca = 0;
var escreverB1;
var escreverB2;

function AlterarTema(){
    
    var mudarFundo = document.getElementById("mudar");
    var bot = document.getElementById("bot");

    if(troca == 0){
        mudarFundo.style.background=`#333439`
        mudarFundo.style.color= `#F7F7F7`
        bot.style.background= `#1C1C1C`;
        bot.style.border = `2px solid #F7F7F7`
        bot.style.color = `#FFFFFF`;
        troca = 1;
    }
    else {
        mudarFundo.style.background=`#ECF4FF`;
        mudarFundo.style.color= `#1C1C1C`;
        bot.style.background= `#ECF4FF`;
        bot.style.border = `2px solid #0E1D2F`;
        bot.style.color = `#0E1D2F`;
        troca = 0;
    }
}

function MostrBots(){
    escreverB1 = document.getElementById("botAcessar1");
    escreverB2 = document.getElementById("botRep1");
    escreverB1.style.display = `inline`;
    escreverB2.style.display = `inline`;
}

function EscBots(){
    escreverB1 = document.getElementById("botAcessar1");
    escreverB2 = document.getElementById("botRep1");
    escreverB1.style.display = `none`;
    escreverB2.style.display = `none`;
}

function MostrBots1(){
    escreverB1 = document.getElementById("botAcessar2");
    escreverB2 = document.getElementById("botRep2");
    escreverB1.style.display = `inline`;
    escreverB2.style.display = `inline`;
}

function EscBots1(){
    escreverB1 = document.getElementById("botAcessar2");
    escreverB2 = document.getElementById("botRep2");
    escreverB1.style.display = `none`;
    escreverB2.style.display = `none`;
}

function MostrBots2(){
    escreverB1 = document.getElementById("botAcessar3");
    escreverB2 = document.getElementById("botRep3");
    escreverB1.style.display = `inline`;
    escreverB2.style.display = `inline`;
}

function EscBots2(){
    escreverB1 = document.getElementById("botAcessar3");
    escreverB2 = document.getElementById("botRep3");
    escreverB1.style.display = `none`;
    escreverB2.style.display = `none`;
}

function MostrBots3(){
    escreverB1 = document.getElementById("botAcessar4");
    escreverB2 = document.getElementById("botRep4");
    escreverB1.style.display = `inline`;
    escreverB2.style.display = `inline`;
}

function EscBots3(){
    escreverB1 = document.getElementById("botAcessar4");
    escreverB2 = document.getElementById("botRep4");
    escreverB1.style.display = `none`;
    escreverB2.style.display = `none`;
}

function MostrBots4(){
    escreverB1 = document.getElementById("botAcessar5");
    escreverB2 = document.getElementById("botRep5");
    escreverB1.style.display = `inline`;
    escreverB2.style.display = `inline`;
}

function EscBots4(){
    escreverB1 = document.getElementById("botAcessar5");
    escreverB2 = document.getElementById("botRep5");
    escreverB1.style.display = `none`;
    escreverB2.style.display = `none`;
}

function MostrBots5(){
    escreverB1 = document.getElementById("botAcessar6");
    escreverB2 = document.getElementById("botRep6");
    escreverB1.style.display = `inline`;
    escreverB2.style.display = `inline`;
}

function EscBots5(){
    escreverB1 = document.getElementById("botAcessar6");
    escreverB2 = document.getElementById("botRep6");
    escreverB1.style.display = `none`;
    escreverB2.style.display = `none`;
}