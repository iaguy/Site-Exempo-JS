function carregar(){
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem')
   var data = new Date()
   var hora = data.getHours()
   var min = data.getMinutes()
   var seg = data.getSeconds()
   var tempo = hora+":"+min+":"+seg
   document.getElementById('msg').innerHTML = `Olá são: ${tempo}`
   setInterval(carregar, 1000)
   if(hora >= 0 && hora <12){
       img.src = 'style/manha.png'
       document.getElementById("saudacao").innerHTML = 'Bom dia!'
   }else if(hora >= 12 && hora <18){
       img.src = 'style/tarde.png'
       document.getElementById("saudacao").innerHTML = 'Boa tarde!'
       document.body.style.background = '#DFA703'
   }else{
        img.src = 'style/noite.png'
        document.body.style.background = '#0C112B'
        document.getElementById("saudacao").innerHTML = 'Boa Noite!'
   }
}