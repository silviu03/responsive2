const seeMobileMenu = document.getElementById("menu-bars");
const seeMobileTop = document.getElementById('mobile-top');
const seeCloseBtn = document.getElementById('close-btn')

seeMobileMenu.addEventListener('click', function() {
    console.log('click');

    if(seeMobileTop.style.display === "none") {
        seeMobileTop.style.display = "block";
        console.log('mobile nav bar');
        
     } 
     //else {
    //     seeMobileTop.style.display = "none";
    //     console.log('mobile nav bar not');
    // }
});

seeCloseBtn.addEventListener('click', function () {
    console.log('click');

    if(seeMobileTop.style.display !== "none") {
        seeMobileTop.style.display = "none"
        console.log('closed');
    }
});