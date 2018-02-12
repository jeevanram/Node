var db = require("./Connector");

var taskName = {
    name: "Sample Task 12",
    status: "OPEN",
    createdBy: "",
    updatedBy: ""
};

var task = db.task.insert(taskName);