const modal = document.querySelector(".modal");
const mainBtn = document.querySelector(".main-button");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-button");

mainBtn.addEventListener("click", function (){
    form.classList.contains('none') && form.classList.remove('none');
    mainBtn.classList.add('none');
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
