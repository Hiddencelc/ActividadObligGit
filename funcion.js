function resumen() {
    let cantTickets =  document.getElementById("cantTickets").value;
    /*console.log(cantTickets); me trae el valor de la cantidad ingresada por el usuario*/
    
    let categoria = document.getElementById("categoria").value;
   
    let valor=0;
    
    let numero= parseInt(cantTickets);
    
    if ( isNaN(numero)|| numero<=0){
        alert("El campo solo permite enteros positivos mayores a cero y no letras:");
    }else{
        switch (categoria) {
               case "1":
                    valor= (200*0.2)*cantTickets;
                    document.getElementById("precioTotal").innerHTML="Monto total a pagar: $ "+ valor;
                    
                    break;
              case "2":
                   valor = (200*0.5)* cantTickets; 
                   document.getElementById("precioTotal").innerHTML="Monto total a pagar: $ "+ valor;
                 
                   break;
              case "3":
                   valor = (200*0.85)*cantTickets; 
                   document.getElementById("precioTotal").innerHTML="Monto total a pagar: $ "+ valor;                  
                   break;
            
                  
        }
   }
}
function borrar() {
      document.getElementById("precioTotal").innerHTML="Total a Pagar: $";      
      
}