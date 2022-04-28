function contar(){
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
     if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
      res.innerHTML = 'IMPOSSIVEL CONTAR!'
      //window.alert('[ERRO] FALTAM DADOS!')
    } else {
      res.innerHTML = 'Contando: '
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(passo.value)
       if (p <= 0){
      window.alert('Passo Invalido!, retornando o valor: 1')
         p = 1
    }
      if(i < f) {
        //contagem crescente
        for(let c = i; c <=f; c += p){
        res.innerHTML += `${c} \u{1F92F}`
      }
      }else{
        //contegem decrescente
        for(let c = i; c >=f; c -= p){
        res.innerHTML += `${c} \u{1F92F}`
        }
      }
      res.innerHTML += '\u{1F3C1}'
    }
  }