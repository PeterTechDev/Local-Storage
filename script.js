onload = ()=>{
    let nome = localStorage.getItem('nome')
    let h1 = document.getElementById('nome')
    h1.innerHTML = nome
}

function update(element){
    let value = element.value;
    let h1 = document.getElementById('nome')
    h1.innerHTML = value;

    localStorage.setItem('nome', value)
}

// TODO: Utilizar json stringfy e parse
