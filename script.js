var body = document.getElementById("body");
var p = document.getElementById("p");

body.addEventListener("keydown" , function y(e) {
   
    switch(e.key){
        case "ArrowUp" : 
            p.textContent = "You are moving Forward";
        break;

        case "ArrowDown" : 
            p.textContent = "You are moving Back";
        break; 

        case "ArrowRight" : 
            p.textContent = "You are moving Right";
        break; 

        case "ArrowLeft" : 
            p.textContent = "You are moving Left";
        break;

        case " " : 
            p.textContent = "You are jumping dont jump again !!";
            body.removeEventListener("keydown" , y);
            
            body.addEventListener("keydown" , function x(e1) {
                var k = e1.key;
                k === " " ? 
                [   
                    console.log(k),
                    p.textContent ="you are dead  x( " ,
                    body.removeEventListener("keydown" , x),
                    body.addEventListener("keydown" , y)
                ]  
                : 
                [
                    console.log(k),
                    p.textContent ="Good Boy :) ",
                    body.removeEventListener("keydown" , x),
                    body.addEventListener("keydown" , y)
                ];     
                
                    // if(k === " "){
                    //     console.log(k);
                    //     console.log("you are dead  x( ") ;
                    //     body.removeEventListener("keydown" , x);
                    //     body.addEventListener("keydown" , y);    
                          
                    // }else{
                    //     console.log(k);
                    //     console.log("Good Boy :) ");
                    //     body.removeEventListener("keydown" , x);
                    //     body.addEventListener("keydown" , y);    
                    // }     
                }); 
                        
        break; 
                
    
                          
        default :
        p.textContent = "You have pressed \""+e.key+"\" Button";

    }
                    
})

    
