const modal = document.querySelector(".modal");
const mainBtn = document.querySelector(".main-button");
const form = document.querySelector(".form");
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
    mainBtn.classList.remove('none');
});

const phone = document.getElementById("phone");
const code = document.getElementById("code");

const phoneMsg = document.querySelector(".phone-message");
const codeMsg = document.querySelector(".code-message");

packageBtn.addEventListener("click", function (){
    modal.classList.add('none');
    phoneMsg.innerHTML = "";
    codeMsg.innerHTML = "";
});

submitBtn.addEventListener("click", function (){
    const phoneValue = document.getElementById("phone").value;
    const codeValue = document.getElementById("code").value;

    const phoneRegExp = /^\d{9}$/g;
    const codeRegExp = /^\d{4}$/g;

    let phoneResult = phoneRegExp.test(phoneValue);
    let codeResult = codeRegExp.test(codeValue);

    if (phoneResult == false){
        phoneMsg.innerHTML = "Niepoprawna wartość";
        phone.classList.add("error");
    }
    else {
        phoneMsg.innerHTML = "";
        phone.classList.remove("error");
    }

    if (codeResult == false){
        codeMsg.innerHTML = "Niepoprawna wartość";
        code.classList.add("error");
    }
    else {
        codeMsg.innerHTML = "";
        code.classList.remove("error");
    }

    if (phoneResult == true && codeResult == true){
        modal.classList.contains('none') && modal.classList.remove('none');
        phone.value='';
        code.value='';
    }
});