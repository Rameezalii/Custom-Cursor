var main: any = document.querySelector("#main");
var crsr: any = document.querySelector(".cursor");

main.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
});
