const inquirer = require("inquirer");
const DB = require("./db");

async function mainMenu(){
    const {choice} = await inquirer.prompt ([
       {
           type: "list",
           name: "choice",
           message: "What action would you like to perform?",
           choices: [
               "View all Departments"
           ] 
       } 
    ])
     switch (choice){
         case "View all Departments":
             return viewAllDepartments()
     }
}

async function viewAllDepartments(){
    const departments = await DB.viewAllDepartments()
    console.table(departments)
}
viewAllDepartments();