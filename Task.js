
function Task(sequelize, Sequelize){
    this.sequelize = sequelize;
    this.Sequelize = Sequelize;

    this.TaskModel = this.sequelize.define('Tasks',{
        TaskId: {type: Sequelize.INTEGER, primaryKey: true},
        TaskName: Sequelize.STRING,
        Status: Sequelize.STRING,
        CreatedDate: Sequelize.DATE,
        CreatedBy: Sequelize.STRING,
        UpdatedDate: Sequelize.DATE,
        UpdatedBy: Sequelize.STRING
    }, {
        timestamps: false
    });
}

//INSERT
Task.prototype.insert = function(taskItem){
    var task = this.TaskModel.create ({
        TaskName: taskItem.name,
        Status: taskItem.status,
        CreatedBy: taskItem.createdBy,
        CreatedDate: Date.now(),
        UpdatedBy: taskItem.updatedBy,
        UpdatedDate: Date.now()
    }).then(function(err){
        console.log("Insert into Tasks table successful.")
    }).catch(function(err){
        console.log("Insert into Tasks table failed ", err);
    });
};

//UPDATE
Task.prototype.updateRecordById = function(taskItem){
    var task = this.TaskModel.update({
        TaskName: taskItem.name,
        Status: taskItem.status,
        CreatedBy: taskItem.createdBy,
        CreatedDate: Date.now(),
        UpdatedBy: taskItem.updatedBy,
        UpdatedDate: Date.now()
    },{ where: {
            TaskId:taskItem.Id
        }
    }).then(function(err){
        console.log("Insert into Tasks table successful.")
    }).catch(function(err){
        console.log("Insert into Tasks table failed ", err);
    });
};

//DELETE

module.exports = Task;

