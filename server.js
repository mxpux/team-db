const inquirer = require("inquirer");
const { viewAllEmployee, addEmp, addDepartment } = require("./db");
const DB = require("./db");

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
        case "Add a Department":
             return addDepartment()
        case "Add an Employee":
             return addEmp()
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

async function addDepart(){
    const addDep = await DB.addDepart()
    console.table(addDepartment)
    mainMenu();
}
async function addEmploy(){
    const addEmployee = await DB.addEmploy()
    console.table(addEmp)
    mainMenu();
}
async function addRole(){
    const addRo = await DB.addRole()
    console.table(addRole)
    mainMenu();
}

mainMenu();