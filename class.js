'use strict';

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    };
    complete() {
        console.log('Complete task for ' + this.name);
        this.completed = true;
    };
    save() {
        console.log('Saving this ', +' ' + this.name);
    };
}

var task1 = new Task('Create demo constructor');
var task2 = new Task('Create demo modules');
var task3 = new Task('Create demo singletons');
var task4 = new Task('Create demo prototypes');


task1.complete();
task2.save();
task3.save();
task4.save();