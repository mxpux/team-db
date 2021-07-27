const inquirer = require("inquirer");
const DB = require("./db");
require("console.table")

async function mainMenu(){
    const {choice} = await inquirer.prompt ([
       {
           type: "list",
           name: "choice",
           message: "What action would you like to perform?",
           choices: [
               "View all Departments", 
               "View all Roles",
               "View all Employees",
               "Add a department",
               "Add a role",
               "Add an Employee"
           ] 
       } 
    ])
     switch (choice){
         case "View all Departments":
             return viewAllDepartments()
         case "View all Roles":
             return viewAllRoles()
        case "View all Employees":
             return viewAllEmp()
        case "Add a department":
             return addDepartment()
        case "Add an Employee":
             return addEmploy()
        case "Add a role":
             return addRole()  
          
     }
}

async function viewAllDepartments(){
    const departments = await DB.viewAllDepartments()
    console.table(departments)
    mainMenu();
}
async function viewAllRoles(){
    const roles = await DB.viewAllRoles()
    console.table(roles)
    mainMenu();
}
async function viewAllEmp(){
    const emp = await DB.viewAllEmp()
    console.table(emp)
    mainMenu();
}

async function addDepartment(){
    // console.log("test")
    const department = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What if your department name?"
        }
    ])
    await DB.createDepartment(department);
    mainMenu();
}

async function addEmploy(){
    const roles = await DB.viewAllRoles()
    const roleChoices = roles.map(({id,title})=>({
        name: title,
        value: id
    }))

    const managers = await DB.viewAllEmp()
    const managerChoices = managers.map(({id, first_name, last_name})=>({
        name: `${first_name} ${last_name}`,
        value: id
    }))
    const employee = await inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "role_id",
            message: "What is the role?",
            choices: roleChoices
        },
        {
            type: "list",
            name: "manager_id",
            message: "Who is the manager?",
            choices: managerChoices
        }
    ])
    await DB.addEmp(employee)
    mainMenu();
}
async function addRole(){
    const departments = await DB.viewAllDepartments()
    const departmentChoices = departments.map(({id, name})=>({
        name: name,
        value: id
    }))

    const role = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your role?"
        },
        {
            type: "input",
            name: "salary",
            message: "How much is the salary?"
        },
        {
            type: "list",
            name: "department_id",
            message: "Which department do you work for?",
            choices: departmentChoices
        }
    ])
    await DB.addRole(role)
    mainMenu();
}

mainMenu();