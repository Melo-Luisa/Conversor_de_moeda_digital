let ether = 8019.35
let litecoin = 477.34
let dogecoin = 0.47

let valor = document.querySelector('#valores')
let converter = document.querySelector('#converter')
let numero = document.querySelector('#valorFinal')

let dolarType = document.querySelector('#eth')
let euroType = document.querySelector('#ltc')
let libraType = document.querySelector('#doge')

converter.addEventListener('click', ()=>{
    if(valor.value >= 1){
        dolarType.addEventListener('click', ()=>{
            let dinheiro = valor.value * ether
            numero.innerHTML = 'R$ ' + dinheiro.toFixed(2)
        })
           
        euroType.addEventListener('click', ()=>{
            let dinheiro = valor.value * litecoin
            numero.innerHTML = 'R$ ' + dinheiro.toFixed(2)
            console.log('euro')
        })
        libraType.addEventListener('click', ()=>{
            let dinheiro = valor.value * dogecoin
            numero.innerHTML = 'R$ ' + dinheiro.toFixed(2)
            console.log('libra')
        })
        
    }else{
         numero.innerHTML = 'Adicione um valor'
       
    }


})






