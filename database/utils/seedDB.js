const { Instructor, Course } = require('../models');

const seed = async() => {
    const dummyEmployee = await Employee.create({
        firstname: "Yosua",
        lastname: "Nainggolan",
        department: "Sales"
    });
    const dummyTask = await Task.create({
        description: "Dead Pool",
        priorityLevel: "3",
        completionStatus: "IP"
    });

    await dummyTask.setEmployee(dummyEmployee);
}

module.exports = seedDB;