var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
//var img = document.getElementById("scream");
//ctx.drawImage(img, 10, 10, 150, 180);

var activeImage = undefined

function clickload() { document.getElementById('file-input').click() }


async function load() {
    var url = URL.createObjectURL(document.getElementById('file-input').files[0]);
    var img = new Image();
    img.onload = function () {
        let c = document.getElementById("canvas2");
        let ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, c.width, c.height);
    }
    img.src = url;
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x,
        "Coordinate y: " + y);
    let imageObject = new Image();
    imageObject.onload = function () {
        
        let canvasmain = document.getElementById("canvas1")
        let ctxmain = canvasmain.getContext('2d');
        ctxmain.drawImage(imageObject, x, y, 60,60);
        console.log("done..")

    }
    imageObject.src = document.getElementById("canvas2").toDataURL();
}

let canvasElem = document.getElementById("canvas1");
  
canvasElem.addEventListener("mousedown", function(e)
{
    getMousePosition(canvasElem, e);
});