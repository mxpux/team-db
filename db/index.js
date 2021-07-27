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
            department.id,
            department.name
        FROM
             department
        ORDER BY
             department.id;
        `
        );
    }

}
module.exports = new DB(connection);