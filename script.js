let sphere = document.getElementById("sphere");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let obj={
    scale:function () {
        sphere.style.transform = "scale(1.5)";
    },
    translate:function () {
        sphere.style.transform = "translate(200px, 200px)";
    },
};
button1.addEventListener("click", obj.scale);
button2.addEventListener("click", obj.translate);