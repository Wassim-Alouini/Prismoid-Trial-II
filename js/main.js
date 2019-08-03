


let x = 0 ;
let y = 0 ;
let z = 0 ;
let bool = 0;


document.getElementById('ft1').addEventListener('click', function() {
    
    x = 22.5
    y = 45
    z = 0
    document.getElementById('cub-1').style.transform = "rotateY(" + y + "deg) rotateX(" + x + "deg) rotateZ(" + z + "deg)";
    document.getElementById('cub-1').style.transition = "1s";

    console.log(x);
})

$(window).ready(function(){
    $(document).keydown(function(event){ 
        let key = event.which;
        if (key == 39) {
            y = y+90;
            document.getElementById('cub-1').style.transform = "rotateY(" + y + "deg)"
            document.getElementById('cub-1').style.transition = "0.2s";
        }
        else if (key == 37) {
            y = y-90;
            document.getElementById('cub-1').style.transform = "rotateY(" + y + "deg)"
            document.getElementById('cub-1').style.transition = "0.2s";
            
        }
        else if (key == 38) {
            z= z+90;
            document.getElementById('cub-1').style.transform = "rotateZ(" + z + "deg)"
            document.getElementById('cub-1').style.transition = "0.2s";
        }
        else if (key == 40) {
            z= z-90;
            document.getElementById('cub-1').style.transform = "rotateZ(" + z + "deg)"
            document.getElementById('cub-1').style.transition = "0.2s";
        }


        
    });
  });




document.getElementById('bk1').addEventListener('click', function() {
    x = -22.5
    y = 225
    z = 0
    
    document.getElementById('cub-1').style.transform = "rotateY(" + y + "deg) rotateX(" + x + "deg) rotateZ(" + z + "deg)";
    document.getElementById('cub-1').style.transition = "1s";
})
document.getElementById('rt1').addEventListener('click', function() {
    x = 0
    y = 135
    z = 22.5
    document.getElementById('cub-1').style.transform = "rotateY(" + y + "deg) rotateX(" + x + "deg) rotateZ(" + z + "deg)";
    document.getElementById('cub-1').style.transition = "1s";
    

    console.log
})
document.getElementById('lt1').addEventListener('click', function() {
    x = 0
    y = -45
    z = -22.5
    document.getElementById('cub-1').style.transform = "rotateY(" + y + "deg) rotateX(" + x + "deg) rotateZ(" + z + "deg)";
    document.getElementById('cub-1').style.transition = "1s";
    

    console.log
})
document.getElementById('bm1').addEventListener('click', function() {
    x = 112.5
    y = 45
    z = 0
    document.getElementById('cub-1').style.transform = "rotateY(" + y + "deg) rotateX(" + x + "deg) rotateZ(" + z + "deg)";
    document.getElementById('cub-1').style.transition = "1s";
    

    console.log
})
document.getElementById('tp1').addEventListener('click', function() {
    x = -67.5
    y = 45
    z = 0
    document.getElementById('cub-1').style.transform = "rotateY(" + y + "deg) rotateX(" + x + "deg) rotateZ(" + z + "deg)";
    document.getElementById('cub-1').style.transition = "1s";
    

    console.log
})

setInterval(function infirotate() {
    var p = Math.floor(Math.random() * 360);
    var n = Math.floor(Math.random() * 360);
    var v = Math.floor(Math.random() * 360);
    document.getElementById('cub-1').style.transform = "rotateY(" + p + "deg) rotateX(" + n + "deg) rotateZ(" + v + "deg)";
    document.getElementById('cub-1').style.transition = "20s"; 
} , 20000)


setInterval(function() {
    var p = Math.floor(Math.random() * 360);
    var n = Math.floor(Math.random() * 360);
    var v = Math.floor(Math.random() * 360);
    document.getElementById('cub-2').style.transition = "5s"; 
    document.getElementById('cub-2').style.transform = "rotateY(" + p + "deg) rotateX(" + n + "deg) rotateZ(" + v + "deg)";
    

} , 5000)
