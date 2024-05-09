const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page3Animation() {
    var elemCont = document.querySelector("#element-container")
    var fixedI =document.querySelector("#fixed-image")

    elemCont.addEventListener("mouseenter", function(){
     fixedI.style.display="block"
    })
    elemCont.addEventListener("mouseleave", function(){
    fixedI.style.display="none"
    })

    // var elems=document.querySelectorAll(".element");
    // elems.forEach(function (e) {
    //     e.addEventListener("mouseenter", function () {
    //         var image = e.getAttribute("data-image")
    //         fixedI.style.backgroundImage = `url(${image})`
    //     })
    // })
}

// function page4Animation() {
//     var elemC = document.querySelector("#elem-container")
//     var fixed = document.querySelector("#fixed-image")
//     elemC.addEventListener("mouseenter", function () {
//         fixed.style.display = "block"
//     })
//     elemC.addEventListener("mouseleave", function () {
//         fixed.style.display = "none"
//     })

//     var elems = document.querySelectorAll(".elem")
//     elems.forEach(function (e) {
//         e.addEventListener("mouseenter", function () {
//             var image = e.getAttribute("data-image")
//             fixed.style.backgroundImage = `url(${image})`
//         })
//     })
// }

