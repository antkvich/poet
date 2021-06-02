let btnRU = document.getElementById("ru");
let btnEN = document.getElementById("en");
let elPoets = document.getElementById("poets");
let elMain = document.getElementById("main");
let elBrand = document.getElementById("brand")

btnEN.addEventListener('click', function (){
    elPoets.innerHTML = "Poets";
    elMain.innerHTML = "Home";
    elBrand.innerHTML = "Belorussian poets";
})
btnRU.addEventListener('click', function (){
    elPoets.innerHTML = "Поэты";
    elMain.innerHTML = "Главная";
    elBrand.innerHTML = "Поэты беларуси";
})