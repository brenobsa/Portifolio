// elaborar um contador com (Inicio:/fim:/Passo:), passo seria pulando de 1 em 1, ou 2 em 2...
// mostrar a baixo os numeros com um emoti e uma bandeira no final]
// erro caso a caixa de texto estiver vazia
// erro caso o passo for igual a 0
function limpar(){
    var res = document.getElementById(`resultado`)
    res.innerHTML = ''
}
function contar(){

    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById(`resultado`)
    
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar'
        
       
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if( p<=0 ){
            window.alert('Passo invalido! Considerando o Passo como 1')
            p=1
        }
        if( i < f){
            // contagem crescente
            for(let c = i; c <=f; c +=p){
                res.innerHTML += ` ${c}\u{1F449}`
            }
            
        
        } else {
            // contagem regressiva
            for (let c = i; c >=f; c -=p){
                res.innerHTML +=` ${c}\u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
}
   
    
