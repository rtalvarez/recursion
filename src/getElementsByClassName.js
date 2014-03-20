// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:

var getElementsByClassName = function (className){

  var targets = [];

  var recurse = function(element){

    var classes = element.classList;
    var children = element.childNodes;

    if (classes){

      for (var i = 0; i < classes.length; i++){

        if (classes[i] === className){

          targets.push(element);
        }
      }
    }

    if (children){

      for (var j = 0; j < children.length; j++){

        recurse(children[j]);
      }

    }
  };

  recurse(document.body);
  return targets;
};
