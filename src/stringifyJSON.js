// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

// This was fun and challenging - it took me a while, but here it is:

// Currently works for: mixes of nested objects and strings (no arrays or functions)
// Still cant figure out a way to make this work while not destroying the original obj, Im aware destroying it is a bad idea
// UPDATE: I had to clone the original object to workaround for the previous .. 'bug'
// This still does not support arrays or functions (is that functionality expected) ?
var stringifyJSON = function(obj){

 // Use this to clone the sent in obj (recurse() will destroy it while stringifying)
 // It is recursive too, but I guess this one is pretty straightforward
 var clone = function(obj){
    
   var cloned = {};
   
   for (var key in obj){
       
       if (typeof obj[key] === 'string'){
           
           cloned[key] = obj[key];
       }else{
           
           cloned[key] = clone(obj[key]);
       }
       
   }
   return cloned;

};
    
 // This is the actual recursive method that will stringify obj
 // It destroys the object obj sent in, hence the need to clone it first
 var recurse = function(obj){

   // Start by saving the stuff we need, and delete it
   index = Object.keys(obj)[0];
   value = obj[index];
   
   delete obj[Object.keys(obj)[0]];
   
   // Case A: 'value' is a string
   if (typeof value === 'string'){
       
       // Case A.1: The object obj has other elements - eg we have not reached the end yet. 
       // Format the values we have and call recurse on obj again and keep going
       if (Object.keys(obj).length !== 0){
           
          return '"' + index + '":"' + value + '",' + recurse(obj);
       }
       
      // Case A.2: The object obj is now empty, just handle the values you have now and exit.
      return '"' + index + '":"' + value + '"}';
   }
   
   // Case B: 'value' is actually a nested object
   else{
       
       // Case B.1: Similar to A.1, obj has other values we need to deal with
       // Call recurse on value (because it is an object) and when done keep going (eg call recurse on what's left of obj)
       if (Object.keys(obj).length !== 0){
           
          return '"' + index + '":{' + recurse(value) + ',' + recurse(obj);
       }
       
      // Case B.2: The object obj is empty, just call recurse on value (again, because it is an object) and exit
      return '"' + index + '":{' + recurse(value) + '}';
       
   }

 };

 // Because recurse() does not account for the initial {, add it and send along the result. This is actually the reason why recurse() even exists
 // I could not find a way to add the initial { without recursing locally rather than globally
 return '{' + recurse(clone(obj));
      
};
