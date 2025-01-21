//let node = document.createElement("li");

function adicionar()
{
    let janela = prompt("Qual a nova tarefa?");

    let listona = [];

    if(janela == "")
    {
        alert("Nome inválido");
    }
    else
    {
        let node = document.createElement("li");
        textnode = document.createTextNode(janela);
        node.appendChild(textnode);
        node.onclick = function () {remover(node)};

        document.getElementById("ft_list").appendChild(node);
        document.getElementById("ft_list").prepend(node);

        listona.push(janela);
        document.cookie = "biscoitoNovo= " + JSON.stringify(listona) + "; path=/; max-age=31536000";
        console.log(document.cookie);

        let listona2 = [];
        listona2 = document.cookie.split("; ").find(row => row.startsWith("biscoitoNovo= "));
    }
}

function remover(node)
{
    if(window.confirm("Certeza?"))
    {
        node.remove();
    }
}

function cookie()
{
    let node = document.createElement("li");
    textnode = document.createTextNode(janela);
    node.appendChild(textnode);
    node.onclick = function () {remover(node)};

    document.getElementById("ft_list").appendChild(node);
    document.getElementById("ft_list").prepend(node);
}