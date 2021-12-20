import Pipeline from '@pipeline-ui-2/pipeline'

const wallet = Pipeline.init()

var lines = []

var line = []

let points = 0

var mode = false

var drawing = false

var canvas = document.getElementById("canvas1")

var address = ""

canvas.addEventListener("mousedown", startDraw, false);
canvas.addEventListener("mousemove", continueDraw, false);
canvas.addEventListener("mouseup", endDraw, false)

document.getElementById("preview").onclick = () => preview(lines)
document.getElementById("bin2String").onclick = () => bin2String()
document.getElementById("algo").onclick = () => {Pipeline.connect(wallet).then(data => {address = data; document.getElementById("address").innerText = address})}
document.getElementById("send").onclick = () => send()
document.getElementById("fetch").onclick = () => handleFetch(document.getElementById("fetchtxid").value)

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

function preview(linesb){
    let canvas2 = document.getElementById("canvas2")
    let ctx2 = canvas2.getContext('2d')
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    console.log(linesb)
    for(let i=0; i< linesb.length; i++){
        drawConstructed(linesb[i])
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
    for(i = 0;i < lines.length - 1; i++){
        lines[i].push("255")
    }
    let array2 = lines.flat(6)
    console.log(array2)
    let data = String.fromCharCode.apply(String, array2);
    document.getElementById("code").innerText = data
    return data
}

async function fetchNote(txid) {

    let indexerURL = 'https://'
  
    if (Pipeline.main == true) {
      indexerURL = indexerURL + 'algoexplorerapi.io/idx2/v2/transactions/'
    }
    else {
      indexerURL = indexerURL + "testnet.algoexplorerapi.io/idx2/v2/transactions/"
    }
  
    let url2 = indexerURL + txid
    try {
      let data = await fetch(url2)
      let data2 = await data.json()
      let data3 = data2.transaction.note
      return data3
    } catch (error) {
      console.log(error)
    }
  }

  
function handleFetch(noteTxID) {
    fetchNote(noteTxID).then(response => {
      let datab = base64ToArrayBuffer(response)
      drawData(datab)
    })
  }

  function base64ToArrayBuffer(data){
    let newData = Buffer.from(data, 'base64');
    console.log(newData);
    return newData;
 }

 function drawData(input){
     let newlines = []
     let subarray = []
     for (let i = 0; i < input.length; i+=2){
         if (input[i] !== 255){
             subarray.push([input[i],input[i+1]])
         }
         else{
             newlines.push(subarray)
             subarray = []
             i-=1
         }
     }
     newlines.push(subarray)
     console.log(newlines)
     preview(newlines)
 }

 function send(){
    Pipeline.send(document.getElementById("recipient").value, 0, document.getElementById("note").value, address, wallet,0)
    .then(data => {
        console.log(data);
    });
 }

