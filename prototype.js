var Repo = require('./module-pattern');
var Task = function(data) {
    this.name = data.name;
    this.completed = false;
}


Task.prototype.complete = function() {
    console.log('Complete task for ' + this.name + ' ');
    this.completed = true;
};

Task.prototype.save = function() {
    console.log('Saving this', +' ' + this.name);
    Repo.save(this);
};

module.exports = Task;