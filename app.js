var keyElement = document.querySelector(".keycode");
console.log(keyElement);
document.addEventListener("keydown", (e) => {
    keyElement.innerHTML = e.keyCode;
});


