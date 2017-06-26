var Task = require('./prototype');
var Repo = require('./module-pattern');

var task1 = new Task(Repo.get(1));
var task2 = new Task({ name: 'Create demo modules' });
var task3 = new Task({ name: 'Create demo singletons' });
var task4 = new Task({ name: 'Create demo prototypes' });

task1.complete();
task2.save();
task3.save();
task4.save();