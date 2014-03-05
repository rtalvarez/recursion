// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function(obj){
    
    //WHY WONT THIS WORK ?! :(  
    //var memo = '{';

    var memo = '';
    var memo2 = '';
    
    if (Object.keys(obj).length === 0){
        
        //OR THIS ?! :(
        //return '{' + memo + '}';
        
        //if the others dont why does this one ?
        return memo + '}';
    }
    
    
    value = obj[Object.keys(obj)[0]];
    index = Object.keys(obj)[0];
    
    delete obj[Object.keys(obj)[0]];
    
    if (typeof value === 'string'){
        
        
      memo = memo + '"' + index + '":"' + value + '",' + stringifyJSON(obj);
    }else{
    
      
      memo2 = '"' + index + '"' + ':{' + stringifyJSON(value) + '';
      
      return memo + memo2 + stringifyJSON(obj);
    }
    
    return memo;

    
}
