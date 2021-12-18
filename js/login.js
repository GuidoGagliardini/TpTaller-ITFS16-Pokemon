
function checkUserLogin(){
    let username = $('#username').val();
    let password = $('#password').val();
    if (username == '' || password == ''){
        alert('Debe ingresar el usuario y la contraseña para continuar');
    }else{
        let url = "credenciales.json";
        $.getJSON( url , function( data ) {
            sha256(password).then( function(respuestaHash){
                checkUser(data, username, respuestaHash);
               
            }); 
                
        }) 
        .fail(function() {
            alert( "error página en mantenimiento " );
        })
    }
}

function checkUser(data, username, password){
        var user = false;
        $.each( data.users, function( key, val ) {
      
            val = JSON.stringify(val);
            val = JSON.parse(val);
    
            if (username === val.user){
                user = true;
               
                if (password == val.password){
                    $('#userId').val(val.idUser);
                    $('#login_form').submit();
                    return false;
                }else{
                    alert( "Contraseña incorrecta");
                    return false;
                }
            }
        })
        
        if (user == false){
            alert("Usuario no registrado");
        }
       
   
}

