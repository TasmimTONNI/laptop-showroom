
let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");


let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".box-main");

function homes(){
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
   about.style.display="none";
   contact.style.display="none";
   document.querySelector('.customer-details').style.display = 'none';
   document.querySelector('.confirmation-message').style.display = 'none';
   document.querySelector(".cart").style.display="none"


   


    



}
function shops(){
mainPage.style.display="none";
blog.style.display="none";
about.style.display="none"
card.style.display="block";
card2.style.display="block";
document.querySelector('.customer-details').style.display = 'none';
document.querySelector('.confirmation-message').style.display = 'none';

document.querySelector(".cart").style.display="none"


 



}

function blogs() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    
    document.querySelector('.customer-details').style.display = 'none';
    document.querySelector('.confirmation-message').style.display = 'none';
    document.querySelector(".cart").style.display="none"

}

function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="block"
   contact.style.display = "none";
    
   document.querySelector('.customer-details').style.display = 'none';
   document.querySelector('.confirmation-message').style.display = 'none';
   document.querySelector(".cart").style.display="none"


}

function contacts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
    
    document.querySelector(".cart").style.display="none"

    document.querySelector('.customer-details').style.display = 'none';
    document.querySelector('.confirmation-message').style.display = 'none';

}




// cart

function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;

    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="none"
    document.querySelector(".cart").style.display="flex"
    document.querySelector('.customer-details').style.display = 'none';
    document.querySelector('.confirmation-message').style.display = 'none';

    
}


function addCart(){
    alert("Added To Cart");
    location.reload()
}









function confirmOrder() {
    document.querySelector('.cart').style.display = 'none'; 
    document.querySelector('.confirmation-message').style.display = 'none'; 
    document.querySelector('.customer-details').style.display = 'block';
    document.querySelector('.confirmation-message').style.display = 'none';

}



function submitOrder(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const color = document.getElementById('color').value;
    const quantity = document.getElementById('quantity').value;


    document.querySelector('.customer-details').style.display = 'none';

    // Show confirmation message
    const confirmationMessage = document.querySelector('.confirmation-message');
    confirmationMessage.style.display = 'block';
    confirmationMessage.innerHTML = `
        <p>Your order has been confirmed!</p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <p>Color: ${color}</p>
        <p>Quantity: ${quantity}</p>
        <div class="btn">
            <button onclick="goBack()">Back to Shop</button>
        </div>
    `;

    // Reset form fields
    document.getElementById('orderForm').reset();
    document.querySelector('button[type="submit"]').disabled = false;
}

function goBack() {
    location.reload(); 
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const color = document.getElementById('color').value;
    const quantity = document.getElementById('quantity').value;

    // Display confirmation message
    const confirmationMessage = document.querySelector('.confirmation-message');
    confirmationMessage.innerHTML = `
        <p>Your order has been confirmed!</p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <p>Color: ${color}</p>
        <p>Quantity: ${quantity}</p>
    `;
    confirmationMessage.style.display = 'block';

    document.getElementById('orderForm').reset(); 
});
