var lines = []

var line = []

let points = 0

var mode = false

var drawing = false

var canvas = document.getElementById("canvas1")

canvas.addEventListener("mousedown", startDraw, false);
canvas.addEventListener("mousemove", continueDraw, false);
canvas.addEventListener("mouseup", endDraw, false)

var context = canvas.getContext('2d')

context.lineWidth = 8;

function startDraw(event) {

    if (mode === true) return;


    var pos = mouseXY(canvas, event);

    drawing = true;

    context.beginPath();
    context.moveTo(pos.x, pos.y);
    line = [];
    line.push([pos.x, pos.y]);
}

function continueDraw(event) {
    if (drawing) {
        var pos = mouseXY(canvas, event);
        context.lineTo(pos.x, pos.y);    
        context.stroke();
        context.beginPath();
        context.moveTo(pos.x, pos.y);
        line.push([pos.x, pos.y]);
    }
}

function endDraw(event) {
    if (drawing)    {
        var pos = mouseXY(canvas, event);
        context.lineTo(pos.x, pos.y);    
        context.stroke();
        drawing = false;
        lines.push(compress(line));
        let L = lines.length
        points += lines[L -1].length
        document.getElementById("points").innerText = "Points: " + points + " Bytes: " + points * 2
    }
}

function compress(array){
    let newline = []
    for (let i =0; i < array.length; i+=6){
        let xnew = ((array[i][0] / canvas.width) * 254).toFixed()
        let ynew = ((array[i][1] / canvas.height) * 254).toFixed()
        newline.push([(xnew < 255)?xnew:254,(ynew < 255)?ynew:254])
    }
    return newline
}

function mouseXY(c, e) {
    var r = c.getBoundingClientRect();
    return {x: e.clientX - r.left, y: e.clientY - r.top};
}

function preview(){
    console.log(lines)
    for(let i=0; i< lines.length; i++){
        drawConstructed(lines[i])
    }
}

function drawConstructed(array){
    let canvas2 = document.getElementById("canvas2")

    let ctx2 = canvas2.getContext('2d')
    ctx2.beginPath();
    ctx2.moveTo((array[0][0] / 255) * canvas2.width,(array[0][1] / 255) * canvas2.height);
    for(pt=1;pt<array.length;pt++){
        var point = array[pt];
        ctx2.lineTo((point[0]  / 255) * canvas2.width,(point[1] / 255) * canvas2.height)
    }
    ctx2.lineWidth=8
    ctx2.lineCap = 'round';
    ctx2.stroke();
}

function bin2String() {
    for(i = 0;i < lines.length; i++){
        lines[i].push("255")
    }
    let array2 = lines.flat(6)
    console.log(array2)
    let data = String.fromCharCode.apply(String, array2);
    document.getElementById("code").innerText = data
    return data
}

function base64ToArrayBuffer(){
    for(i = 0;i < lines.length; i++){
        lines[i].push(255)
    }
    let array2 = lines.flat()
    let newData = Buffer.from(array2, 'base64');
    
 }