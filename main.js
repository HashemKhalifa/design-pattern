var Task = require('./prototype');
var Repo = require('./module-pattern');

var task1 = Repo.get(1);
var task2 = new Task('Create demo modules');
var task3 = new Task('Create demo singletons');
var task4 = new Task('Create demo prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();