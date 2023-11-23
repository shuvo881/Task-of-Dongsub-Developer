
console.log("Hello from myscript.js");

//find pout the card from local storage

if (localStorage.getItem('cart') == null) {
  var cart = {};
} else {
  cart = JSON.parse(localStorage.getItem('cart'));
  updateCart(cart);

}
// add or increment code

// $('.cart').click(function() {
$('.divpr').on('click', 'button.cart', function() {
  var idstr = this.id.toString();
  console.log(idstr)

  if (cart[idstr] != undefined) {
      qty = cart[idstr][0] + 1;

  } else {
      qty = 1;
      name = document.getElementById('name' + idstr).innerHTML;
      price = document.getElementById('price' + idstr).innerHTML;
      cart[idstr] = [qty, name, price];

  }
  updateCart(cart);

  localStorage.setItem('cart', JSON.stringify(cart));
  document.getElementById('cart').innerHTML = Object.keys(cart).length;
  console.log( Object.keys(cart).length)
  document.getElementById("popcart").click();
});
// add pop over to cart

$('#popcart').popover();

updatePopover(cart);
function updatePopover(cart) {


  console.log('we are  inside update popover');

  var popStr = "";
  var popStr = popStr + "<h5> cart for your items in my shopping cart </h5> <div class='mx-2 my-2'>";
  var i = 1;
  for (var item in cart) {
      popStr = popStr + "<b>" + i + "</b>. ";
      popStr = popStr + document.getElementById('name' + item).innerHTML.slice(0, 19) + "..." + "<b>" +cart[item][0] + "</b>"+ "Qty"  + '<br>';
      i = i + 1;
  }

  popStr = popStr + "</div> <a href='checkout'><button class='btn btn-success' id='clearCart'>Checkout</button></a>  <button class='btn btn-dark' onclick='clearCart()' id='clearCart'>ClearCart</button>"
  document.getElementById('popcart').setAttribute('data-content', popStr);
  $('#popcart').popover('show');
  document.getElementById("popcart").click();
}

function clearCart() {
  cart = JSON.parse(localStorage.getItem('cart'));
  for (var item in cart) {
      document.getElementById('div' + item).innerHTML = '<button id="' + item + '" class="btn btn-primary cart">Add To Card <i class="fa-solid fa-cart-shopping"></i></button>'
  }
  localStorage.clear();
  cart = {};
  updateCart(cart);

 let clear= document.getElementById("popcart").click();
 document.getElementById("popcart").click();

}

function updateCart(cart) {
  var sum = 0;
  for (var item in cart) {
      sum = sum + cart[item][0];
      document.getElementById('div' + item).innerHTML = "<button id='minus" + item + "'class='btn btn-success minus'>-</button> <span class=text-white id='val" + item + "''>"  +cart[item][0] + "</span> <button id='plus" + item + "' class='btn btn-success plus'> + </button>";
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  document.getElementById('cart').innerHTML = sum;
  console.log(cart);
  updatePopover(cart);
  document.getElementById("popcart").click();
}

//if plus or minus button is clicked change the cart as well as the display value
$('.divpr').on("click", "button.minus", function() {

  a = this.id.slice(7, );
  cart['pr' + a][0] = cart['pr' + a][0] - 1;
  cart['pr' + a][0] = Math.max(0, cart['pr' + a][0]);
  document.getElementById('valpr' + a).innerHTML = cart['pr' + a][0];
  updateCart(cart);


})


$('.divpr').on("click", "button.plus", function() {

  a = this.id.slice(6, );
  cart['pr' + a][0] = cart['pr' + a][0] + 1;

  document.getElementById('valpr' + a).innerHTML = cart['pr' + a][0];
  updateCart(cart);


})