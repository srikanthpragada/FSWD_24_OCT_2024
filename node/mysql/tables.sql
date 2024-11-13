CREATE USER 'demo'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'demo';
GRANT ALL PRIVILEGES ON *.* TO 'demo'@'localhost';
FLUSH PRIVILEGES;

create database hrdb;

use hrdb;

create table departments
( dept_id  char(2) primary key,
  dept_name varchar(30) not null
 );


insert into departments values('it','Information Technology');
insert into departments values('sa','Sales');
insert into departments values('ac','Accounts');


create table employees
( 
  employee_id int auto_increment primary key,
  fullname varchar(30) not null,
  dept_id char(2) references departments(dept_id),
  salary int 
);


insert into employees(fullname,dept_id,salary) values('Robert Iger','sa',400000);
insert into employees(fullname,dept_id,salary) values('Scott Peck','sa',500000);
insert into employees(fullname,dept_id,salary) values('Noah Harari','it',800000);
insert into employees(fullname,dept_id,salary) values('James Clear','it',550000);
insert into employees(fullname,dept_id,salary) values('Marc Randolph','ac',120000);



