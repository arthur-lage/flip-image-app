const image = document.getElementById("image");
const button = document.getElementById("new-image-button")
const input = document.getElementById("image-url-input")

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

button.addEventListener("click", () => {
    if(input.value.length !== 0 && checkURL(input.value) == true){
        image.src = input.value
    } else {
        alert("Invalid URL.")
    }
})

function rotateImage(direction){
    if(direction == "up"){
        image.style.transform = "scale(-1)"
    } 
    switch(direction){
        case "up":
            image.style.transform = "scaleY(-1)";
            break;
        case "down":
            image.style.transform = "scaleY(1)";
            break;    
        case "left":
            image.style.transform = "scaleX(-1)";
            break;    
        case "right":
            image.style.transform = "scaleX(1)";
            break;    
    }
}