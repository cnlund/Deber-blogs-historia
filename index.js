const b1 = document.getElementById("blog1")
const b2 = document.getElementById("blog2")
const irb1 = function() {
    location=("./blog1.html")
}
const irb2 = function() {
    location=("./blog2.html")
}
blog1.addEventListener("click", irb1)
blog2.addEventListener("click", irb2)