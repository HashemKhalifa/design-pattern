var task = {
    title: 'My title',
    description: 'My description'
}

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false, // that means u can't accidentlly or inadvertently overwrite this property later. 
    enumerable: false,
    configurable: false // you can't  redefine property

});

Object.defineProperty(task, 'toString', {
    //  enumerable: true
})

task.toString = 'Hi';

console.log(task.toString())
console.log(Object.keys(task))


var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {

    value: function() {
        return this.title + ' ' + 'Urgent task!!!!';
    },
    writable: false, // that means u can't accidentlly or inadvertently overwrite this property later. 
    enumerable: false,
    configurable: false // you can't  redefine property
});

console.log(urgentTask.toString());