var modal = document.getElementById("simpleModal");
var modalBtn = document.getElementById("modalBtn");
var closeBtn = document.getElementById("closeBtn");


modalBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", clickOutside);

document.addEventListener('scroll', scrollOut);

function openModal() {
    modal.style.display="block";
}

function closeModal() {
    modal.style.display="none";
}
function clickOutside(e) {
    if(e.target == modal){
        modal.style.display ="none";
    }
}
function scrollOut() {
    var scroll_position = window.scrollY;
    if(scroll_position < 600){
        modal.style.display = "none";
    }if(scroll_position > 1300){
        modal.style.display = "none";
    }else{return}
}