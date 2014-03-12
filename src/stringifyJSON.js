// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function(obj){
    
 var recurse = function(obj){

   index = Object.keys(obj)[0];
   value = obj[index];
   

   delete obj[Object.keys(obj)[0]];
   
   if (typeof value === 'string'){
       
       if (Object.keys(obj).length !== 0){
           
          return '"' + index + '":"' + value + '",' + str(obj);
       }
       
       
      return '"' + index + '":"' + value + '"}';
   }
   
   else{
       
       if (Object.keys(obj).length !== 0){
           
          return '"' + index + '":{' + str(value) + ',' + str(obj);
       }
       
      return '"' + index + '":{' + str(value) + '}';
       
   }

 };

 return '{' + recurse(obj);
    

      
}
