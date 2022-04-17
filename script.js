function on()
{
    document.getElementById("overlay").style.display = "block";
}
  
  function off() 
{
    document.getElementById("overlay").style.display = "none";
}
let counter = 0;
// counter
function minus ()
{
 if (counter >= 1){
  counter = parseInt( document.getElementById("counter").innerHTML);
 counter -= 1
 console.log(counter)
  document.getElementById("counter").innerHTML = counter
}

}
function plus ()
{
 
 counter = parseInt( document.getElementById("counter").innerHTML);
 counter += 1
 console.log(counter)
 document.getElementById("counter").innerHTML = counter


}

function onCart()
{
    document.getElementById("cart").style.display = "block";
    if(counter> 0){
    document.getElementById("item").style.display = "block";
let price = `<h6>
125.00 x` + counter + `=`+ counter*125+`</h6>`
document.getElementById("price").innerHTML = price
document.getElementById("emptycart").style.display = "none";
}
}
function offCart()
{document.getElementById("cart").style.display = "none";

}
function empty()
{
counter = 0;
document.getElementById("emptycart").style.display = "block";
document.getElementById("fullcart").style.display = "none";
document.getElementById("cartitems").style.display = "none";

document.getElementById("counter").innerHTML = counter;
document.getElementById("cartitems").style.display = "none";
}

function addCart()
{
    console.log("clicked")
    document.getElementById("cartitems").style.display = "block";
    document.getElementById("cartitems").innerHTML = counter;

}

document.getElementById("cartitems").style.display = "none";