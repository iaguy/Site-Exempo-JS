function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('nasc')
    var res = window.document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')  
    }else{
      var fsex = window.document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var gen = ""
      if(fsex[0].checked){
          gen = 'Homem'
          if(idade >= 0 && idade <=15){
            img.setAttribute('src', 'style/crianca-m.png')
          }else if (idade >= 15 && idade <= 21){
            img.setAttribute('src', 'style/jovem-m.png')
          }else if(idade >= 21 && idade <= 50){
            img.setAttribute('src', 'style/adulto-m.png')
          }else{
            img.setAttribute('src', 'style/idoso-m.png')
          }
      }else if (fsex[1].checked){
          gen = 'Mulher'
          if(idade >= 0 && idade <=15){
            img.setAttribute('src', 'style/crianca-f.png')
          }else if (idade >= 15 && idade <= 21){
            img.setAttribute('src', 'style/jovem-f.png')
          }else if(idade >= 21 && idade <= 50){
            img.setAttribute('src', 'style/adulto-f.png')
          }else{
            img.setAttribute('src', 'style/idoso-f.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectei <strong>${gen}</strong> com <strong>${idade}</strong> anos.`
      res.appendChild(img)
      
    }
   }