create table books 
(
    id int auto_increment primary key,
    title varchar(50) not null,
    author varchar(50) not null,
    price int check(price >= 0)
);


insert into books(title, author, price) values('The Outliers', 'Malcolm Gladwell', 550);
insert into books(title, author, price) values('Long walk to freedom', 'Nelson Mandela', 750);
insert into books(title, author, price) values('World is flat', 'Thomas Friedman', 525);
insert into books(title, author, price) values('Gift of Fear', 'Gavin de Becker', 825);
insert into books(title, author, price) values('Zero to one', 'Peter Thiel', 750);