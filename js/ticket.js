
  /* 
    Pedir al usuario nombre y en qué año nació.
    La máquina procesa y luego lo saluda y
    le indica cuántos años tiene.
*/
    let btnResumen;
    let btnBorrar;
    let selectCategoria;
    let cantidad;
    let totalConDescuento;
    let totalSinDescuento;
    let precio=200;
    let totalPagar;

totalPagar = document.getElementById("totalPagar");
btnBorrar=document.getElementById("btn-borrar");
btnResumen = document.getElementById("btn-resumen");

 function procesar(e) {
    e.preventDefault();

selectCategoria = document.getElementById("selectCategoria").value;
inputCantidad = document.getElementById("input-cantidad").value;    

function descuentoTicket(categoria,cantidad){
        totalSinDescuento = cantidad*precio;
        if(categoria ==1){
            totalConDescuento=(totalSinDescuento-((totalSinDescuento*80)/100));
            totalPagar.innerText =totalConDescuento;
        }
        if(categoria==2){
            totalConDescuento=(totalSinDescuento-((totalSinDescuento*50)/100));
            totalPagar.innerText =totalConDescuento;
        }
        if(categoria==3){
            totalConDescuento=(totalSinDescuento-((totalSinDescuento*15)/100));
            totalPagar.innerText =totalConDescuento;
        }
    }


    // PROCESO


    descuentoTicket(selectCategoria,inputCantidad);
    // SALIDA(S)  
}
function borrar(){
    totalPagar.innerText = 0;

}


btnResumen.onclick = procesar; 
btnBorrar.onclick = borrar;

 


