create database oct24;

use oct24;



create table departments
( dept_id  char(2) primary key,
  dept_name varchar(30) not null
 );

insert into departments values('it','Information Technology');
insert into departments values('sa','Sales');
insert into departments values('ac','Accounts');


create table employees
( 
  emp_id int auto_increment primary key,
  fullname varchar(30) not null,
  dept_id char(2) references departments(dept_id),
  salary int check(salary >=0)
);


insert into employees(fullname,dept_id,salary) values('Robert Iger','sa',400000);
insert into employees(fullname,dept_id,salary) values('Scott Peck','sa',500000);
insert into employees(fullname,dept_id,salary) values('Noah Harari','it',800000);
insert into employees(fullname,dept_id,salary) values('James Clear','it',550000);
insert into employees(fullname,dept_id,salary) values('Marc Randolph','ac',120000);
insert into employees(fullname,dept_id,salary) values('Malcolm Gladwell','sa',850000);
insert into employees(fullname,dept_id,salary) values('Clive Thompson','sa',500000);
insert into employees(fullname,dept_id,salary) values('Stephen King','it',780000);
insert into employees(fullname,dept_id,salary) values('Hans Rosling','ac',350000);
insert into employees(fullname,dept_id,salary) values('Peter Thiel','it',850000);
insert into employees(fullname,dept_id,salary) values('Json Hunter','ac',null);


update employees set salary = salary * 1.1 where dept_id = 'sa'

select * 
from employees
where salary > 500000

select *
from employees
where fullname like 'S%'

select *
from employees
where fullname like '_t%'

select *
from employees
where fullname like '%t%'

select  fullname, dept_name
from employees join departments 
using(dept_id)

select  fullname, dept_name, salary
from employees join departments 
using(dept_id)
where salary < 500000

select fullname, dept_name
from employees e join departments d
on e.dept_id = d.dept_id

select *
from employees
order by salary desc


select date_add(curdate(),interval 1 month)

select datediff(curdate(),'2024-1-1')

select date_format(curdate(),'%d-%m-%Y')

select month(current_date())

select fullname,  left(fullname, instr(fullname,' '))
from employees

select fullname,  mid(fullname, instr(fullname,' ') + 1)
from employees

select  sum(salary)
from employees

select avg(salary), min(salary), max(salary)
from employees

select dept_id, avg(salary), min(salary), max(salary)
from employees
group by dept_id

select sum(salary)
from employees
where dept_id = 'sa'

select dept_id, avg(salary)
from employees
group by dept_id 

select dept_id, avg(salary)
from employees
group by dept_id 
order by 2


select dept_name, count(*)
from employees join departments using (dept_id)
group by dept_name


select * from departments
where dept_id in
  (select dept_id
   from employees
   where salary > 500000)



select dept_id, count(emp_id)
from employees
group by dept_id
having count(emp_id) > 3

select dept_id
from employees
where salary > 400000
group by dept_id
having count(*)  > 3


select *
from employees  
where dept_id in 
  (select dept_id from departments where dept_name like 'A%')


select *
from employees  
where salary =
   (select max(salary) from employees)
   

