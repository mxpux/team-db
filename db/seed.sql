use Employee_Tracker; 
INSERT INTO department
    (name)
VALUES
    ('Nooks Cranny'),
    ('Able Stores'),
    ('Villagers');
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Store Manager', 750000, 1),
    ('Cashier', 500000, 1),
    ('Turnip Buyer', 50000, 1),
    ('Tailor', 1000000, 2),
    ('Fashion Designer', 1000000, 2),
    ('Stylist', 60000, 2),
    ('Cranky Villager', 250000, 3),
    ('Peppy Villager', 250000, 3),
    ('Smug Villager', 50000, 3);
INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES  
    ('Raymond', 'The Dreamy', 1, NULL),
    ('Static', 'The Squirrel', 2, 1),
    ('Daisy', 'The Pup', 3, 1),
    ('Cherry', 'The Cub', 4, NULL),
    ('Merengue', 'The Rhino', 5, 4),
    ('Kabuki', 'The Cat', 6, 4),
    ('Dom', 'The Sheep', 7, NULL),
    ('Audie', 'The Wolf', 8, 7),
    ('Cube', 'The Penguin', 9, 7);
