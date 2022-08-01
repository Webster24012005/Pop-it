const p = document.querySelectorAll(".push");

for(let i=0; i < p.length; i++ ){
p[i].onclick = function() {
    p[i].classList.toggle("active")
}
}