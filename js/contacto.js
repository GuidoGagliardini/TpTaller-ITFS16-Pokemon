
  function clickButton  (){
  const jsonConsultas = {};
  const nombreContacto =  document.getElementById('nombre_contacto').value;
  const emailContacto =  document.getElementById('email_contacto').value;
  const telContacto =  document.getElementById('telefono_contacto').value;
  const consultaContacto =  document.getElementById('consulta_contacto').value;
  console.log( document.formContacto.nombre_contacto.value);
  console.log( document.formContacto.email_contacto.value);

  //Validaciones

  //EMAIL
    function validarEmail (){
      const exprReg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      if (!exprReg.exec(emailContacto)){
     
        return false;
        

      }else{
        console.log("Mail Correcto")
        return true;
      }
    }
    validarEmail();


    console.log("VALIDAR MAIL",validarEmail());

    //FIN EMAIL
    //Campos vacios
    if(nombreContacto.length === 0){
      
      const DOMSpanForms = document.querySelector('#nombreSpan');
      const spansForm = document.createElement('span');
      spansForm.classList.add('text-danger');
      spansForm.textContent= "Campos Vacios"
      DOMSpanForms.appendChild(spansForm);
    }if (emailContacto.length === 0){
      const DOMSpanForms = document.querySelector('#emailSpan');
      const spansForm = document.createElement('span');
      spansForm.classList.add('text-danger');
      spansForm.textContent= "Campos Vacios"
      DOMSpanForms.appendChild(spansForm);

    }if (telContacto.length === 0){
      const DOMSpanForms = document.querySelector('#celSpan');
      const spansForm = document.createElement('span');
      spansForm.classList.add('text-danger');
      spansForm.textContent= "Campos Vacios"
      DOMSpanForms.appendChild(spansForm);
    }if (consultaContacto.length === 0){
      const DOMSpanForms = document.querySelector('#consultaSpan');
      const spansForm = document.createElement('span');
      spansForm.classList.add('text-danger');
      spansForm.textContent= "Campos Vacios"
      DOMSpanForms.appendChild(spansForm);
    }if(validarEmail()===false){
      console.log("Mail Erroneo");
      const DOMSpan = document.querySelector('#emailSpan')
      const spanMail = document.createElement('span');
      spanMail.classList.add('text-danger');
      spanMail.textContent="Email incorrecto     ";
      DOMSpan.appendChild(spanMail);
      
    }if(validarEmail()===true && nombreContacto.length>0 && emailContacto.length>0 && telContacto.length>0 && consultaContacto.length>0){
      console.log("ValidacionesOK");
      var myModal = new bootstrap.Modal(document.getElementById('myModal'),{
        keyboard:false
      });
        function funcionInicioModal(){
          myModal.show();
          const textModalUser = document.getElementById('textModal');
          textModalUser.textContent = `Gracias por su consulta  ${nombreContacto}. 
          Le enviaremos un mail a ${emailContacto}. Presione Enviar!`;
          //Carga de JSON  y envio de adtos
            jsonConsultas.nombreContacto= nombreContacto;
            jsonConsultas.emailContacto= emailContacto;
            jsonConsultas.telContacto= telContacto;
            jsonConsultas.consultaContacto = telContacto;
            const datosUserConst =  JSON.stringify(jsonConsultas);
            console.log("Envio de Info   ", datosUserConst);
         
      
        }
        funcionInicioModal();
    }
  
   
};
function envioOk(){
  console.log("Se enviaron los datos");
  document.location.href = "index2.html";
}



