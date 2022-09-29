

var remove = document.getElementsByClassName("removeitem");
for (var i = 0; i < remove.length; i++) {
  var button = remove[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
  });
}

var remove = document.getElementsByClassName("removeall");
for (var i = 0; i < remove.length; i++) {
  var button = remove[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.grandParentElement.remove();
    updateTotal();
  });
}





let quantity1 = document.getElementById("quantity1");
let quantity2 = document.getElementById("quantity2");
let quantity3 = document.getElementById("quantity3");

let price1 = document.getElementById("price1");
let price2 = document.getElementById("price2");
let price3 = document.getElementById("price3");

let totalPrice = document.getElementById("totalPrice");

 quantity1.addEventListener('click', () =>{

   var item1 = quantity1.value * 20
   price1.innerText = item1


   quantity2.addEventListener('click', () =>{
    var item2 = quantity2.value * 20
    price2.innerText  =    item2
  
  
  
    quantity3.addEventListener('click', () =>{
      var item3 = quantity3.value * 20
      price3.innerText  =  item3
       
     

  totalPrice.innerText =    item1 + item2 + item3

   })
  
})


})



function updateTotal() {
//   var cartContainer = document.getElementsByClassName("shopprice")
//   var total = 0;
//   for (var i = 0; i < cartContainer.length; i++) {
//     var price = cartContainer[i];
//     var priceElement = price.innerText;
//     var newPrice = priceElement.replace("$", "");
//     var quantity = document.getElementById("quantity").valueAsNumber;
//     total = total + newPrice * quantity;
//   }
//   var tunde = document.getElementsByClassName("Subtotal");
  
}






// let shopPrices = document.querySelectorAll("[ data-shopPrice ]")
// let itemQuantitys = document.querySelectorAll("[data-itemQuantity]");

//  itemQuantitys.forEach( itemQuantity => {
//    itemQuantity.addEventListener("click", () =>{
//     let itemsSelected = (itemQuantity.value) * 20
//          console.log(itemsSelected)
       

//      shopPrices.forEach( shopPrice => {
//         shopPrice.addEventListener("onchange", () =>{
//           let itemQuantity =itemsSelected * 20
//            console.log(itemQuantity)
//         })
      

       
       
      

//      })

   
//    })
   
//  })