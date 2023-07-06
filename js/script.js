const uname = document.getElementById('full-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message'); 
const button = document.getElementById('submitButton');

submitButton.addEventListener("click", function (event) {
    event.preventDefault()
    const unameValue = uname.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const messageValue = message.value;
    Validation(unameValue, emailValue, phoneValue, messageValue)
})

function Validation(name, email, phone, message) {
    if (name == "" || email == "" || phone == "" || message == "")  {
        alert("Please fill the form")
    } else {
        alert("Success")
    }
}

var slideIndex = 1
setInterval(function() {
    plusDiv(1)
}, 1500)

function plusDiv(index) {
    showImage(slideIndex += index) 
}

function showImage(index) {
    const imgList = document.getElementsByClassName("slider")
    if (index > imgList.length) {slideIndex = 1}
    if (index < 1) {slideIndex = imgList.length}
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"
    }
    imgList[slideIndex - 1].style.display = "block"
}

// TESTING FOR GIT PULL REQUEST 