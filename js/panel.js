let id = params.get('id');

let body = document.getElementsByTagName('body')
let json = document.getElementsByTagName('p')

if(id==1){
    $(json).show()
}

else if(id==2){
    $(json).hide()
}

else{
    $(body).hide()
    alert('Usted no tiene los permisos necesarios para entrar a este panel de administrador')
    
}

