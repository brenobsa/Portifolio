// elaborar uma tabuada, uma caixa de texto pedindo o numero
function tabuada(){

    let numero = document.getElementById(`numero`)
    let res = document.getElementById(`res`)
    let area = document.getElementById(`txta`)

    if (numero.value.length==0){
        alert("[ERRO], Por favor insira um numero.")
    }else{
        let n = Number(numero.value)
        let c = 1
        // para limpar a caixa sempre que iniciar a function
        tab.innerHTML = ''
        while(c<=10){
            // criar um elemento para o select
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            // adicionar value no select
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
            
        }
    }
}