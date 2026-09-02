
let search=document.getElementById('search')
let products=document.querySelectorAll('.product-card')

search.addEventListener('input',function(){
    let valeur=search.value.toLowerCase()
    products.forEach(product =>{
        let name=product.querySelector('h3').textContent.toLowerCase()
        if(name.startsWith(valeur)){
            product.style.display='block'
        }else{
            product.style.display='none'
        }
    })
})

let form = document.getElementById('form');
let button = document.getElementById('btn');

button.addEventListener('click', function(event) {
    event.preventDefault(); 

    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let email = document.getElementById('email').value;

    
    let regexName = /^[a-zA-Z\s]{2,20}$/; 

    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (!regexName.test(nom)) {
        document.getElementById('errorName').textContent = "Le nom est incorrect";
        isValid = false;
    } else {
        document.getElementById('errorName').textContent = "";
    }

    if (!regexName.test(prenom)) {
        document.getElementById('errorLastName').textContent = "Les proportions sont incorrectes";
        isValid = false;
    } else {
        document.getElementById('errorLastName').textContent = "";
    }

    if (!regexEmail.test(email)) {
        document.getElementById('errorEmail').textContent = "L'e-mail est incorrect";
        isValid = false;
    } else {
        document.getElementById('errorEmail').textContent = "";
    }

    if (isValid) {
        alert("Vous êtes abonné avec succès !");
    }
});



let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")

let images = [
    'https://p0.piqsels.com/preview/199/903/706/france-velizy-villacoublay-parfume-lacoste.jpg',
    'https://p0.piqsels.com/preview/611/811/821/parfum-cologne-night-bedroom.jpg',
    'https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=2070&auto=format&fit=crop',
    'https://p0.piqsels.com/preview/50/513/209/selective-focus-photography-of-eau-de-parfum-bottle.jpg'
]

let islide = 0

img1.style.left = "0%"
img2.style.left = "100%"

img1.src = images[0]

img1.style.transition = "1s"
img2.style.transition = "1s"

let slider = setInterval(function(){

    islide++

    if(islide >= images.length){
        islide = 0
    }

    img2.src = images[islide]

    
    img1.style.left = "-100%"
    img2.style.left = "0%"

    setTimeout(function(){

        
        let temp = img1
        img1 = img2
        img2 = temp

        
        img2.style.transition = "none"
        img2.style.left = "100%"

        setTimeout(function(){
            img2.style.transition = "1s"
        }, 50)

    }, 1000)

}, 2000)



let cardpar = document.querySelectorAll('.product-card.reveal')


setInterval(function(){

    for(let i = 0; i < cardpar.length; i++){

        cardpar[i].style.transition = "0.6s"

        cardpar[i].style.boxShadow =
        "0 15px 30px rgba(0,0,0,0.08)"

        cardpar[i].style.transform = "scale(1)"
    }

    setTimeout(function(){

        for(let i = 0; i < cardpar.length; i++){

            cardpar[i].style.boxShadow =
            "0 25px 50px rgba(212, 175, 55, 0.25), 0 10px 20px rgba(0,0,0,0.1)"

            cardpar[i].style.transform = "scale(1.03)"
        }

    }, 1000)

}, 2500)
$(document).ready(function() {
    // 1. Ouvrir/Fermer le menu mobile (Hamburger)
    $('#hamburger').on('click', function() {
        $('#mobile-menu').toggleClass('open');
    });
    // 2. Fermer la barre d'annonce
    $('#close-announcement').on('click', function() {
        $('#announcement-bar').slideUp();
    });
});

$(document).ready(function() {
    // 1. Ouvrir/Fermer le menu mobile (Hamburger)
    $('#hamburger').on('click', function() {
        $('#mobile-menu').toggleClass('open');
    });
    // 2. Fermer la barre d'annonce
    $('#close-announcement').on('click', function() {
        $('#announcement-bar').slideUp();
    });
});