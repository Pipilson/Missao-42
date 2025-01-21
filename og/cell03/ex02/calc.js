setInterval(carencia, 30000);

function carencia()
{
    alert("Please, use me...");
}

function tryMe()
{
    let numero = document.getElementsByClassName("num");
    let selecao = document.getElementById("selecao");
    let num0 = numero[0].value;
    let num1 = numero[1].value;
    let operacao = selecao.value;

    if(+num0 < 0 || +num1 < 0)
    {
        alert("Error :(");
    }
    else if(Number.isInteger(+num0) && Number.isInteger(+num1))
    {
        if((operacao == "/" || operacao == "%") && +num1 == 0)
        {
            alert("It's over 9000!");
        }
        else
        {
            alert(eval(num0 + operacao + num1));
            console.log(eval(num0 + operacao + num1));
        }
    }
    else
    {
        alert("Error :(");
    }
}