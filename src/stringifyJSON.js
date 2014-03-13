// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

// difference between undefined and null ?
var stringifyJSON = function(obj){

  if (typeof obj === 'number' || typeof obj === 'boolean'){

    return '' + obj;

  }else if (obj === null){

    return 'null';

  }else if (Array.isArray(obj)){

    if (obj.length === 0){

      return '[]';

    }else{

      var str = '[';

      if (obj.length === 1){

        if (Array.isArray(obj[0])){

          return str + stringifyJSON(obj[0]) + ']';

        }else if (typeof obj[0] === 'object'){

          return str + '{' + stringifyJSON(obj[0]) + '}';
        }

        return typeof obj[0] === 'number' ? str + obj[0] + ']' : str + '"' + obj[0] + '"]';
      }
      for (var i = 0; i < obj.length - 1; i++){

        if (typeof obj[i] === 'string'){

          str = str + '"' + obj[i] + '",';

        }else if (typeof obj[i] === 'number'){

          str = str + obj[i] + ',';

        }else if (Array.isArray(obj[i])){

          str = str + stringifyJSON(obj[i]) + ',';

        }else{
        
          str = str + stringifyJSON(obj[i]) + ',';
        }
      }
      if (Array.isArray(obj[obj.length - 1])){

        str = str + stringifyJSON(obj[obj.length - 1]);
        return str + ']';

      }else if (typeof obj[obj.length - 1] === 'object'){

        str = str + stringifyJSON(obj[i]);
        return str + ']';
      }
      return typeof obj[obj.length - 1] === 'number' ? str + obj[obj.length - 1] + ']' : str + '"' + obj[obj.length - 1] + '"]';

    }
  }else if (typeof obj === 'string'){

    return '"' + obj + '"';

  }else if (typeof obj === 'object'){

    var str = [];
    if (Object.keys(obj).length === 0){

      return '{}';

    }else if (Object.keys(obj).length !== 1){

      for (var key in obj){

        if (typeof obj[key] === 'string'){

          str.push('"' + key + '":"' + obj[key] + '"');

        }else if (typeof obj[key] === 'boolean' || obj[key] === null){

          str.push('"' + key + '":' + obj[key]);

        }else if (typeof obj[key] === 'function' || obj[key] === undefined){

          // Do nothing, ha !

        }else{

          str.push('"' + key + '":' + stringifyJSON(obj[key]));

        }

      }

      return '{' + str.join(',') + '}';


    }else{

      if (typeof obj[Object.keys(obj)[0]] === 'string'){

        return '{"' + Object.keys(obj)[0] + '":"' + obj[Object.keys(obj)[0]] + '"}'; 

      }else if (typeof obj[Object.keys(obj)[0]] === 'function' || obj[Object.keys(obj)[0]] === undefined){

        // Nothing here !

      }else{

        return '{"' + Object.keys(obj)[0] + '":' + stringifyJSON(obj[Object.keys(obj)[0]]) + '}'; 
      }

      return 'troll';
    }

    
  }

  
  //return JSON.stringify(obj);
};
