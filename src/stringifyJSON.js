// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function(obj){
    
 //Todo: Put the initial { by somehow identifying the first iteration, like
 //the first 'else' identifies the last iteration. (Will be tricky since I
 //dont know the initial length of Object.keys(obj) )
 
 //Also: JSON.stringify() does not destroy the original object, and I do :(!
 
 //Known bugs: it crashes when sent a) more than 1 nested object inside,
 //or b) more than 1 object in total. (TypeError: Object.keys called on
 //non object)
 
 //Eg a) crashes with:
     //{
       //name: 'rob',
       //obj2: {somekey: 'value1', otherkey: 'value2', obj3: {key:'value'}}
     //}
 //Eg b) crashes with:
      //{
       //name: 'rob',
       //obj2: {somekey: 'value1', otherkey: 'value2'},
       //obj3: {newkey: 'value3', newestkey: 'hello world'}
     //}
 
 value = obj[Object.keys(obj)[0]];
 index = Object.keys(obj)[0];
 
 delete obj[Object.keys(obj)[0]];
 
 if (typeof value === 'string'){
     
    if (Object.keys(obj).length !== 0){
        
      return '"' + index + '":"' + value + '",' + str(obj);
      
    }
    
    else{
        
      return '"' + index + '":"' + value + '"}';
      
    }
       
 }else{
     
     return '"' + index + '":{' + str(value) + ',' + str(obj);
 }
    
}
