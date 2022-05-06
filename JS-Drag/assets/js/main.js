let fruit = document.getElementById("f");
let vegetable = document.getElementById("v");
let fruits = document.querySelector(".fruits");
let vegetables = document.querySelector(".vegetables")
let mix = document.querySelector(".mix-basket");

document.querySelectorAll(".fruit").forEach(item => {
    item.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("fId", this.id)
    })
})

fruits.addEventListener("dragover", function (el) {
    el.preventDefault();
})

fruits.addEventListener("drop", function (elem) {
    let dara = elem.dataTransfer.getData("fId");
    this.appendChild(document.getElementById(dara));
})


document.querySelectorAll(".vegetable").forEach(val => {
    val.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("vId", this.id)
    })
})

vegetables.addEventListener("dragover", function (el) {
    el.preventDefault();
})

vegetables.addEventListener("drop", function (elem) {
    let sada = elem.dataTransfer.getData("vId");
    this.appendChild(document.getElementById(sada));
})

mix.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("mixId", this.id);
})

mix.addEventListener("dragover", function (el) {
    el.preventDefault();
})

mix.addEventListener("drop", function (elem) {
    let basket = elem.dataTransfer.getData("mixId");
    this.appendChild(document.getElementById(basket));
})