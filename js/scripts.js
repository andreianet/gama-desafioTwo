/*function client(name, address, city) {
    let newClient = { name: name, address: address, city: city };

    if ( typeof(Storage) !== "undefined" ) {
        let clients = localStorage.getItem("clients");
        if (clients == null) {
            clients = []; 
        }else {
            clients = JSON.parse(clients);
        }
        clients.push(newClient); 
        localStorage.setItem("clients", JSON.stringify(clients))
        alert("Testando")     
        window.reload();
    } else {
        alert("A versão do seu navegador é muito antiga. Não foi possível executar a aplicação.")
    }
}*/

let client = document.getElementById('client')    
client.addEventListener('submit',(event) => {
       event.preventDefault();
            let name = document.getElementById("name").value;
            let address = document.getElementById("address").value;
            let city = document.getElementById("city").value; 
            
        let dataCli = {
            name,
            address,
            city,
        }
    let dadosclient = JSON.stringify(dataCli);
    client.push(dataCli);
    localStorage.setItem("client",dadosclient)  
    alert("Registro de Clientes, ok!") 
    
})
    
   
let product = document.getElementById('product')    
   product.addEventListener('submit',(e) => {
          e.preventDefault();
               let product = document.getElementById("product").value;
               let count = document.getElementById("count").value;
               let price = document.getElementById("price").value; 
               
           let dataProd = {
               product,
               count,
               price,
           }
       let dadosproduct = JSON.stringify(dataProd);
       product.push(dataProd);
       localStorage.setItem('product', dadosproduct) 
       alert("Registro de Produtos, ok!")       
   
   })
  