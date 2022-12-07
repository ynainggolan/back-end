const { Employee, Task } = require('../models');

const seedDB = async() => {
    const dummyEmployee = await Employee.create({
        firstname: "Yosua",
        lastname: "Nainggolan",
        department: "Sales"
    });
    const dummyEmployee2 = await Employee.create({
		firstname: "Johnny",
		lastname: "Kim"
	});
    const dummyTask = await Task.create({
        description: "Dead Pool",
        priorityLevel: "3",
        completionStatus: "IP"
    });

    await dummyTask.setEmployee(dummyEmployee);
}

module.exports = seedDB;