let amigos = [];
function adicionar(){
    let nome = document.getElementById('nome-amigo');
    nome.value = nome.value.toUpperCase();
    if (nome.value == ''){
        alert('informe o nome do(a) amigo(a)');
        return; //utiliza o return para finalizar a função aqui e só segue se corrigir;
    } else if(amigos.includes(nome.value)){
        alert('Nome já adicionado!');
        nome.value = '';
        return;
    } else{    
    let lista = document.getElementById('lista-amigos');
    amigos.push(nome.value);
    if(lista.textContent == ''){
        lista.textContent = nome.value;
    }else{
       lista.textContent = lista.textContent + ', ' + nome.value; 
    }
    nome.value = '';   
    }
}

function sortear(){
    if (amigos.length<4){
        alert('Adicione pelo menos 4 amigos!');
        return;
    } else{
     embaralhar(amigos);
     let listaSorteio = document.getElementById('lista-sorteio');
     for ( let i = 0; i < amigos.length; i++){
        if( i == amigos.length-1){
        listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else{
        listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>';
        }
    }
    }
}

function embaralhar(lista){ // http://cangaceirojavascript.com.br/como-embaralhar-arrays-algoritmo-fisher-yates/ algorítmo usado em aula para acessar o código abaixo para sortear uma array;
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
