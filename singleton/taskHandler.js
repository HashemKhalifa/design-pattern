var myrepo = require('./Repo');


var taskHandler = function() {
    return {
        save: function() {
            myrepo.save('Hi from task Handler ');
        }
    }
}

module.exports = taskHandler();