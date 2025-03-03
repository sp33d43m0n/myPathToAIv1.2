var myObj = {
    a: 1,
    b: 2,
    c: 3
  };
  
  Object.defineProperty(myObj, 'd', {
    value: 4,
    writable: false,
    configurable: true,
    enumerable: false
  });
  myObj.d = 5;
  console.log(myObj); // {a: 1,b: 2,c: 3}
  
  for(var item in myObj) {
    console.log(item);
  }

 