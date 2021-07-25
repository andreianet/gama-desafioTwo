let client = document.getElementById('client')    
client.addEventListener('submit',(e) => {
       e.preventDefault();
            let name = document.getElementById("name").value;
            let address = document.getElementById("address").value;
            let city = document.getElementById("city").value; 
            
        let data = {
            name,
            address,
            city,
        }
    let dados = JSON.stringify(data);
    localStorage.setItem('lead', dados)   
    
})
    
   
   let product = document.getElementById('product')    
   product.addEventListener('submit',(e) => {
          e.preventDefault();
               let product = document.getElementById("product").value;
               let count = document.getElementById("count").value;
               let price = document.getElementById("price").value; 
               
           let data = {
               product,
               count,
               price,
           }
       let dados = JSON.stringify(data);
       localStorage.setItem('lead', dados)        
   
   })
  