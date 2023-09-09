//what is factorial//
//5 factorial=5*4*3*2*1=120
var input_number=-4;
var factorial=1;

if(input_number==0){
    factorial=1;
    console.log(factorial);
}
else if(input_number==1){
    factorial=1;
    console.log(factorial);
}
else if(input_number< 0){
    console.log("Invalid,only complex number can be found!!!");
}

 else{
    for(var i=input_number;i>=1;i--){
     factorial=factorial*(i);
     
    
    }
    console.log(factorial);
 }



