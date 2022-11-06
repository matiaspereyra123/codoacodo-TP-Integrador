
    let btnResumen;
    let btnBorrar;
    let selectCategoria;
    let cantidad;
    let totalConDescuento;
    let totalSinDescuento;
    let precio=200;
    let totalPagar;
    let alert;
    let msgPagar;

totalPagar = document.getElementById("totalPagar");
btnBorrar=document.getElementById("btn-borrar");
btnResumen = document.getElementById("btn-resumen");
alert = document.getElementById("alert");
msgPagar = document.getElementById("msg-pagar");

 function procesar(e) {
    e.preventDefault();

selectCategoria = document.getElementById("selectCategoria").value;
inputCantidad = document.getElementById("input-cantidad").value; 


function calcularValorTicket(cantidad,precio){
    totalSinDescuento = cantidad*precio;
    return totalSinDescuento;
}   

function validarPositivo(cantidad){
    if(cantidad<=0){
       alert.classList.remove("alert-primary")
       alert.classList.add("alert-danger");
       msgPagar.innerText="";
       totalPagar.innerText="Debe ingresar un valor positivo";
    }else{
        msgPagar.innerText= "Total a Pagar: $";
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-primary");
        totalPagar.innerText = 0;
        descuentoTicket(selectCategoria); 
        
    }
}

validarPositivo(inputCantidad);

 function descuentoTicket(categoria){
  
        totalSinDescuento = calcularValorTicket(inputCantidad,precio);

        if(categoria ==1){
            totalConDescuento=(totalSinDescuento-((totalSinDescuento*80)/100));
            totalPagar.innerText =totalConDescuento;
        }
        else if(categoria==2){
            totalConDescuento=(totalSinDescuento-((totalSinDescuento*50)/100));
            totalPagar.innerText =totalConDescuento;
        }
        else if(categoria==3){
            totalConDescuento=(totalSinDescuento-((totalSinDescuento*15)/100));
            totalPagar.innerText =totalConDescuento;
        }
   
   
    } 


}
function borrar(e){
    e.preventDefault();
    totalPagar.innerText = 0;

}


btnResumen.onclick = procesar; 
btnBorrar.onclick = borrar;

 


