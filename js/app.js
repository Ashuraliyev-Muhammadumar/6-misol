function removeStringSpaces(){
   const arr = [4, 2, 10, 13, 19, 344, -4, 1, -6, -8, 2, -2];
   let x = 0 ;
   let y = 0 ;
   for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
         x = x + arr[i];
        }
        if(arr[i] > 0){
            y = y + 1;
        }
    } 
     console.log(`[${y} , ${x} ]`);
}
removeStringSpaces();