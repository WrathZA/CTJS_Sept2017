var arr = [1,2,3,4,5,6];

var reducerCallback = function(accumulator, current) {
  return accumulator += current;
}

var ret = arr.reduce(reducerCallback); //Array.prototype.reduce()

console.log(ret); //21

//https://randomuser.me/api/?results=25&inc=gender,name,nat,dob