//alert("Deu bom")

function tabuada() {
    var num = document.getElementById('num')
    var lista = document.getElementById('lista')
    var linha = document.getElementById('linha')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um valor')
    } else {
        let n = Number(num.value)
        let c = 0
        lista.innerHTML = ' '
        while (c <= 10) {
            let item = document.createElement('li')
            item.innerText = `${n}X${c}=${n * c}`
            lista.appendChild(item)
            c++
        }
    }
}
