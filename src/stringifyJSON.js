// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

// difference between undefined and null ?
var stringifyJSON = function(obj){

  if (typeof obj === 'number' || typeof obj === 'boolean'){

    return '' + obj;
  }
  else if (obj === null){

    return 'null';
  }
  else if (typeof obj === 'string'){

    return '"' + obj + '"';
  }
  else if (Array.isArray(obj)){

    var ans = [];

    for (var i = 0; i < obj.length; i++){

      ans.push(stringifyJSON(obj[i]));
    }

    return '[' + ans.join(',') + ']';
    
  }else{

    var ans = [];

    for (var key in obj){

      if (typeof obj[key] !== 'function' && obj[key] !== undefined){

        ans.push('"' + key + '":' + stringifyJSON(obj[key]));
      }
    }

    return '{' + ans.join(',') + '}';

  }
};
