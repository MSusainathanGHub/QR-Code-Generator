// Get the variables from HTML

let display = document.querySelector(".display");
let download = document.querySelector(".download");
let container = document.querySelector("img-container");
let imageContainer = document.querySelector(".img-container");


function createScanner(){
    getScanner();
}

async function getScanner() {
let datas = document.querySelector(".datas").value;
let width = document.querySelector(".width").value;
let height = document.querySelector(".height").value;
let qrcolor = document.querySelector(".qrcolor").value;
let bgcolor = document.querySelector(".bgcolor").value;
let formats = document.querySelector(".formats").value;


let color = qrcolor.substring(1);
let backcolor = bgcolor.substring(1);


try {
    const response = await fetch(`
    https://api.qrserver.com/v1/create-qr-code/?size=${width}x${height}&data=${datas}&color=${color}&bgcolor=${backcolor}&format=${formats}`);
    console.log(response);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    console.log("url",url);
   
    if(imageContainer.hasChildNodes()){
        imageContainer.removeChild(imageContainer.childNodes[0]);
    }

    /* Create the QR code */
        const parent = document.createElement("div");
        parent.classList.add("parent");
        const img = document.createElement('img');
        img.src = url;
        parent.appendChild(img);
        imageContainer.appendChild(parent);
    
    /*Create the download button */
    const anchor = document.createElement('a');
    anchor.href= url;
    anchor.classList.add("btn");
    anchor.classList.add("btn-primary");
    anchor.classList.add("btn-lg");
    anchor.classList.add("links");
    anchor.innerHTML ="Download";
    anchor.setAttribute('download', '');
    document.body.appendChild(anchor);


    sample.href=url;
    anchor.setAttribute('download', '');
 
}
    catch (error) {
        console.error(error);
      }
}







