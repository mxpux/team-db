const connection = require('./connection');
class DB {
    constructor(connection) {
        this.connection = connection;
    }
    viewAllDepartments() {
        return this.connection.query(
            `
        SELECT
            department.id AS ID,
            department.name AS Department
        FROM
             department
        ORDER BY
             department.id;
        `
        );
    }
    viewAllRoles() {
        return this.connection.query(
            `
        SELECT
            role.id AS ID,
            role.title AS Title,
            role.salary AS Salary,
            department.name AS Department
        FROM
            role 
        LEFT JOIN 
            department ON role.department_id = department.id
        ORDER BY
             department.id;
        `
        );
    }

    viewAllEmp() {
        return this.connection.query(
            `   
        SELECT
            e.id AS ID,
            e.first_name AS "First_Name",
            e.last_name AS "Last_Name",
            role.title AS Title,
            role.salary AS Salary,
            department.name AS Department,
            (SELECT CONCAT(first_name, ' ', last_name) FROM employee WHERE id = e.manager_id) AS Manager
        FROM 
            employee e
        LEFT JOIN 
            role ON e.role_id = role.id
        LEFT JOIN
            department ON role.department_id = department.id
        ORDER BY
			department.id;
        `
        );
    }

    createDepartment(department) {
        return this.connection.query(
            `
        INSERT INTO
            department
        SET
            ?
        `, department
        );
    }
    addEmp(employee) {
        return this.connection.query(
            `
        INSERT INTO
            employee
        SET
            ?
        `, employee
        );
    }
    addRole(role) {
        return this.connection.query(
            `
        INSERT INTO
            role
        SET
            ?
        `, role
        );
    }
    addSalaryComb() {
        return this.connection.query(
            `
        SELECT
            department.name,
        SUM(role.salary) AS Salary
        FROM
            department
        JOIN
            role on role.department_id = department.id
        GROUP BY
            department.name
        `,
        );
    }

}

module.exports = new DB(connection);