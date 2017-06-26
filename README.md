# design-pattern
# Object in Javascript 

— Creating Objects

1- var obj = { };
2- var secondObj = Object.create(Object.prototype);
3- var thirdObject = new Object

— Assign value to object
var obj = {};
obj.param = ‘New Value’;
console.log(obj.param);
Or
obj[‘param’] = ‘New Value’;
console.log(obj[‘param’]); // new value

Once of advantage of using bracket notation sometimes not always, is that u can use [ ] using variables:

var val = 'value'; 
obj[val] = ‘New value’;
console.log(obj[val]); // new value

Object.defineProperty(obj, ‘name’, {

Value: 'my name’,
writable: true,  // set wether or not that's writable which means I can create constants, so something can't be changed
enumerable: true, // means either in a for in loop, or if I do the keys function then it will show up or it won't show
configurable: true // means i'm not allowed to change the configuration of these items, so once i set it, i'm not allowed to set it again to something different
})
