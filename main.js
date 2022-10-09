//cambio en cantidad de numero ingresado por el usuario

const minusBtn = document.querySelector(".input__minus");
const plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__numero");

let numberUserInput = 0;

plusBtn.addEventListener("click", ()=>{
    numberUserInput++;
    userInput.value = numberUserInput;
    
});

minusBtn.addEventListener("click", ()=>{
    numberUserInput--;
    if(numberUserInput <= 0){
        numberUserInput = 0;
    }
    userInput.value = numberUserInput;
   
});

// Agregar el total de productos al carrito cuando se presiona el boton add to cart

const addToCartBtn = document.querySelector(".details__button");
const cartNotification = document.querySelector(".header__cart--notification");
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener("click", ()=> {
 lastValue = lastValue + numberUserInput;

  cartNotification.innerText = numberUserInput;
  cartNotification.style.display = "block";
  drawProductInModal();

  
});

// Mostrar el modal con el detalle del carrito

const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");
// let priceModal = document.querySelector(".cart-modal__price");
const productContainer = document.querySelector(".cart-modal__chekout-container");

cartIconBtn.addEventListener("click", () => {
cartModal.classList.toggle("show");

if(lastValue === 0){
    productContainer.innerHTML = '<p class="cart-empty">your cart is empty</p>';
} else {
    drawProductInModal();
}

});

//Borrar el contenido del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector(".cart-modal__delete");
    deleteProductBtn.addEventListener("click", ()=> {
        productContainer.innerHTML = '<p class="cart-empty">your cart is empty</p>'; 
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
}
// cambiar imagenes cuando se presione los botones flechas
const imageContainer = document.querySelector(".gallery__image-container");
const previusGalleryBtn = document.querySelector(".gallery__previus");
const nextGalleryBtn = document.querySelector(".gallery__next");
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', ()=>{
   changeNextImage(imageContainer);    
});

previusGalleryBtn.addEventListener('click', ()=>{
    changePreviusImage(imageContainer);    
 });


//Mostrar el modal de imagenes cuando hago click en la imagen principal.
const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');
imageContainer.addEventListener("click", () => {
   imagesModal.style.display = "grid";
});

closeModalBtn.addEventListener('click', ()=>{
    imagesModal.style.display = 'none';
})

//Cambiar las imagenes principales desde los thumnails

let thumbnails = document.querySelectorAll('.gallery__thumnail')
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnails => {
    thumbnails.addEventListener('click', event=>{
   
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg') `
    });
})
            
//Cambiar las imagenes principales desde los thumnails en el MODAL
let modalThumbnail = document.querySelectorAll('.modal-gallery__thumnail')
const modalImageContainer = document.querySelector('.modal-gallery__image-container')
modalThumbnail = [...modalThumbnail]


modalThumbnail.forEach(modalThumbnail => {
    modalThumbnail.addEventListener('click', event=>{
     modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg') `
    });
});

//cambiar imagen principal del modal desde flechas en el modal
const previusModalBtn = document.querySelector('.modal-gallery__previus')
const nextModalBtn = document.querySelector('.modal-gallery__next')

nextModalBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageContainer);    
 });
 
 previusModalBtn.addEventListener('click', ()=>{
     changePreviusImage(modalImageContainer);    
  });
 

  //Mostrar el navbar cuando presiono el menu de hamburguesa
 const headerMenu = document.querySelector('.header__menu');
 const modalNavbar = document.querySelector('.model-navbar__background');
 const closeModalNavbar = document.querySelector('.model-navbar__close-icon')

 modalNavbar.style.display = 'none'

  headerMenu.addEventListener('click', ()=>{
   modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', ()=> {
    modalNavbar.style.display = 'none';
});

//Funciones

function drawProductInModal(){
    productContainer.innerHTML = `
    <div class="cart-modal__details-container">
    <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
    <div>
      <p class="cart-modal__product">Autumn Limited Edition...</p>
      <p class="cart-modal__price">$125 x3 <span>$375.00</span>
    </div>
    <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
    </div>
    <button class="cart-modal__checkout">Checkout</button>`
    deleteProduct()
    let priceModal = document.querySelector(".cart-modal__price");

    priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue * 125}.00</span>`;
}

function changeNextImage(imgContainer){
    if(imgIndex === 4){
        imgIndex = 1;
    }else {
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg') `
}

function changePreviusImage(imgContainer){
    if(imgIndex === 1){
        imgIndex = 4;
    }else {
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg') `
}



