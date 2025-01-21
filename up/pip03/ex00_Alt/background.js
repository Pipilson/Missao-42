function mudarCor()
{
    let vermelho = Math.floor(Math.random() * 256);
    let verde = Math.floor(Math.random() * 256);
    let azul = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${vermelho}, ${verde}, ${azul})`;
}