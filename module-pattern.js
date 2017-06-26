var repo = function() {

    var get = function(id) {
        console.log('Getting task ' + id);
        return {
            name: 'New task from DB '
        }
    }

    var save = function(task) {
        console.log('saving ' + task.name + ' ' + 'to DB');
    }

    return {
        get: get,
        save: save

    }
}

module.exports = repo();