let balao = document.getElementsByClassName("bola");
balao[0].style.width = "200px";
balao[0].style.height = "200px";
let cor = 0;

function aumentar()
{
    let tamanho = parseInt(balao[0].style.width);

    if(tamanho >= 420)
    {
        balao[0].style.width = 200 + "px";
        balao[0].style.height = 200 + "px";
        cor = 0;
    }
    else
    {
        balao[0].style.width = tamanho + 10 + "px";
        balao[0].style.height = tamanho + 10 + "px";
        cor += 1;
    }

    mudaCor();
}

function diminuir()
{
    let tamanho = parseInt(balao[0].style.width);

    if(tamanho <= 200)
    {
        //não faz nada
    }
    else
    {
        balao[0].style.width = tamanho - 5 + "px";
        balao[0].style.height = tamanho - 5 + "px";
        cor -= 1;    
    }

    mudaCor();
}

function mudaCor()
{

    if(cor > 2)
    {
        cor = 0;
    }
    if(cor < 0)
    {
        cor = 2;
    }

    switch(cor)
    {
        case 0:
            balao[0].style.backgroundColor = "red";
             break;
        case 1:
            balao[0].style.backgroundColor = "green";
             break;
        case 2:
            balao[0].style.backgroundColor = "blue";
            break;
    }
}