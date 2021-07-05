const seeMobileMenu = document.getElementById("menu-bars");
const seeMobileTop = document.getElementById('mobile-top');

seeMobileMenu.addEventListener('click', function() {
    console.log('click');

    if(seeMobileTop.style.display === "") {
        seeMobileTop.style.display = "block";
        console.log('mobile nav bar');
        
    } else {
        seeMobileTop.style.display = "";
        console.log('mobile nav bar not');
    }
});