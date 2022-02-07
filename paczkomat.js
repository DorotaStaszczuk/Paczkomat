const modal = document.querySelector(".modal");
const mainBtn = document.querySelector(".main-button");
const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submit-button");
submitBtn.disabled = true;

mainBtn.addEventListener("click", function (){
    form.classList.contains("none") && form.classList.remove("none");
    mainBtn.classList.add("none");
});

const endBtn = document.querySelector(".end");
const packageBtn = document.querySelector(".package");

endBtn.addEventListener("click", function (){
    form.classList.add("none");
    modal.classList.add("none");
    mainBtn.classList.remove("none");
    submitBtn.disabled = true;
});

const phone = document.getElementById("phone");
const code = document.getElementById("code");

const phoneMsg = document.querySelector(".phone-message");
const codeMsg = document.querySelector(".code-message");

packageBtn.addEventListener("click", function (){
    modal.classList.add("none");
    phoneMsg.innerHTML = "";
    codeMsg.innerHTML = "";
    submitBtn.disabled = true;
});

// I am creating an array to check if there are already two correct input values,
// because I need to know when I can enable submit button
let checkArray = [];

function validatePhone() {
    const phoneValue = document.getElementById("phone").value;
    const phoneRegExp = /^\d{9}$/g;
    let phoneResult = phoneRegExp.test(phoneValue);

    if (phoneValue == ""){
        phoneMsg.innerHTML = "Pole nie może byc puste";
        phone.classList.add("error");
    }
    else if (phoneResult == false){
        submitBtn.classList.remove("loading");
        submitBtn.innerHTML = "Odbierz paczkę";
        phoneMsg.innerHTML = "Niepoprawna wartość";
        phone.classList.add("error");
    }
    else {
        phoneMsg.innerHTML = "";
        phone.classList.remove("error");
        checkArray[0] = "phone";
    }

    if (checkArray.length == 2){
        submitBtn.disabled = false;
    }

    return phoneResult;
};

function validateCode() {
    const codeValue = document.getElementById("code").value;
    const codeRegExp = /^\d{4}$/g;
    let codeResult = codeRegExp.test(codeValue);

    if (codeValue == ""){
        codeMsg.innerHTML = "Pole nie może byc puste";
        code.classList.add("error");
    }
    else if (codeResult == false){
        submitBtn.classList.remove("loading");
        submitBtn.innerHTML = "Odbierz paczkę";
        codeMsg.innerHTML = "Niepoprawna wartość";
        code.classList.add("error");
    }
    else {
        codeMsg.innerHTML = "";
        code.classList.remove("error");
        checkArray[1] = "code";
    }

    if (checkArray.length == 2){
        submitBtn.disabled = false;
    }

    return codeResult;
};

function validate() {
    const phoneValue = document.getElementById("phone").value;
    const codeValue = document.getElementById("code").value;

    const phoneRegExp = /^\d{9}$/g;
    const codeRegExp = /^\d{4}$/g;

    let phoneResult = phoneRegExp.test(phoneValue);
    let codeResult = codeRegExp.test(codeValue);

    if (phoneResult == true && codeResult == true){
        modal.classList.contains("none") && modal.classList.remove("none");
        phone.value="";
        code.value="";
        submitBtn.classList.remove("loading");
        submitBtn.innerHTML = "Odbierz paczkę";
    }
    else {
        submitBtn.classList.remove("loading");
        submitBtn.innerHTML = "Odbierz paczkę";
        submitBtn.disabled = true;
    }
}

submitBtn.addEventListener("click", function(){
    submitBtn.classList.add("loading");
    submitBtn.innerHTML = "";
    checkArray = [];
    setTimeout(validate, 1500);
});

phone.addEventListener("focusout", validatePhone);
code.addEventListener("focusout", validateCode);
