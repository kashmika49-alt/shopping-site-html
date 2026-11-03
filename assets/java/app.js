loadProducts()

function loadProducts(){
    fetch("http://localhost:8080/get-products")
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        generateProductsCards(data)
    })
}

function generateProductsCards(data){
    let productGrid = document.getElementById("container-cards");
    let productGridContent = "";
    
    data.array.forEach(element => {
    productGridContent += `<div>
    
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    </div>`        
    });
productGrid.innerHTML = productGridContent;
}