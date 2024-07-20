let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
const specialchars = ["x²", "*", "/", "-", "+", "="];

let buttonsArray = Array.from(buttons);

let string = '';
// Add event listener to buttons, call calculator() on click.
buttonsArray.forEach(btn => {
 //Button click listener calls calculate() with innerHTML as argument.
    btn.addEventListener('click',(event) =>{
       
        if(event.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            display.value = string;

        }else if(event.target.innerHTML =='x²'){ 
            string *= string;
            display.value = string;
            
        }else if(event.target.innerHTML =='AC'){
            string ='';
            display.value = string;
        }else if(event.target.innerHTML =='='){
            string = eval(string);
            display.value = string;
        }else{ string += event.target.innerHTML;
            if(string ==="" && specialchars.includes(btn))return;
    
                display.value = string;    
      }
       
    });

});

console.log(buttonsArray);