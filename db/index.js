const connection = require('./connection');
class DB {
    constructor(connection) {
        this.connection = connection;
    }
    viewAllDepartments() {
        return this.connection.query(
            `
        SELECT
            department.id,
            department.name
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
            role.id,
            role.title,
            role.salary,
            department.name
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
            employee.id,
            employee.first_name,
            employee.last_name,
            role.title,
            role.salary,
            department.name,
            employee.manager_id
        FROM
            employee
        LEFT JOIN 
            role ON employee.role_id = role.id
        LEFT JOIN
            department ON role.department_id = department.id
        LEFT JOIN
            employee AS employeeTable ON employee.manager_id = employee.id
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

}
module.exports = new DB(connection);