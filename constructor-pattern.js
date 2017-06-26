var Task = function(name) {
    this.name = name;
    this.complete = false;

    this.complete = function() {
        console.log('Complete task for ' + this.name);
        this.complete = true;
    }

    this.save = function() {
        console.log('Saving this ', +' ' + this.name);
    }
}

var task1 = new Task('Create demo constructor');
var task2 = new Task('Create demo modules');
var task3 = new Task('Create demo singletons');
var task4 = new Task('Create demo prototypes');


task1.complete();
task2.save();
task3.save();
task4.save();