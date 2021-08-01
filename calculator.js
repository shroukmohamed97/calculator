const regex = new RegExp('^[0-9/+/-/*/.//]*$');

let screenString = "" ; 
var screenInput ;
setTimeout(()=>{screenInput = document.getElementById( "screenInput" ) ;} , 100 )
function enterNum (num) {
 screenString += num ;
 screenInput.value = screenString ;
}

function enterOperator (operator) {
    screenString += operator ;
    screenInput.value = screenString ;
   }

   function cleare () {
    screenString = "" ;
    screenInput.value = screenString ;
   }

   function del () {
    screenString =screenString.slice(0,-1) ;
    screenInput.value = screenString ;
   }


   function getResult(){
    if(regex.test(screenString)){


    
    screenString  = (eval(screenString)).toString();
        screenInput.value = screenString  ;
    }
   }

   function changeText (event){
    if(regex.test(event.target.value)){
    screenString = event.target.value ;
    }
    else{
        screenInput.value = screenString  ;
    }

   }