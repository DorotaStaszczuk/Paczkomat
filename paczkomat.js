const modal = document.querySelector(".modal");
const mainBtn = document.querySelector(".main-button");
const form = document.querySelector("form");

mainBtn.addEventListener("click", function (){
    (mainBtn.classList.contains('clicked-once') && modal.classList.contains('none')) && modal.classList.remove('none');
    form.classList.contains('none') && form.classList.remove('none');
    !form.classList.contains('none') && mainBtn.classList.add('clicked-once');
});

const endBtn = document.querySelector(".end");
const packageBtn = document.querySelector(".package");

endBtn.addEventListener("click", function (){
    form.classList.add('none');
    modal.classList.add('none');
    mainBtn.classList.remove('clicked-once');
});

packageBtn.addEventListener("click", function (){
    modal.classList.add('none');
});
