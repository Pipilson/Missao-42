let cor = false;

function mudarCor()
{
    if(cor)
    {
        document.body.style.backgroundColor = "red";
        cor = false;
    }

    else
    {
       document.body.style.backgroundColor = "blue"; 
       cor = true;
    }
}