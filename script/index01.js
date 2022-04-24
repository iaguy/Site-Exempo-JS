function carregar(){
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem')
   var data = new Date()
   var hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas. `
   if(hora >= 0 && hora <12){
       img.src = 'style/manha.png'
   }else if(hora >= 12 && hora <18){
       img.src = 'style/tarde.png'
       document.body.style.background = '#DFA703'
   }else{
        img.src = 'style/noite.png'
        document.body.style.background = '#0C112B'
   }
}