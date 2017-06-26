var TaskRepo = (function() {
    var taskRepo;

    function createRepo() {
        var taskRepo = new Object("Task");
        return taskRepo
    }

    return {
        getInstance: function() {
            if (!taskRepo) {
                taskRepo = createRepo();
            }
            return taskRepo;
        }
    };
})();

var repo1 = TaskRepo.getInstance(); // create new instance
var repo2 = TaskRepo.getInstance(); // already has that instance so it just returns it

if (repo1 === repo2) {
    console.log('Same TaskRepo');
}