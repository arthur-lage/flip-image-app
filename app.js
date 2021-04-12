const image = document.getElementById("image");

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