drop database if exists order_dashboard;
create database order_dashboard;
use order_dashboard;
create table customer (
  customer_id int auto_increment,
  customer_fname varchar(30) not null,
  customer_lname varchar(30) not null,
  customer_tel varchar(10),
  customer_location varchar(120),
  primary key(customer_id)
);

create table orders (
  order_id int auto_increment,
  order_date date,
  customer_id int,
  primary key (order_id),
  foreign key (customer_id) references customer (customer_id) on
    delete cascade on
    update cascade
);

create table menu (
  menu_id int auto_increment,
  menu_name varchar(30),
  menu_price int,
  order_id int,
  primary key (menu_id),
  foreign key (order_id) references orders (order_id) on
    delete cascade on
    update cascade
);

create table addon (
  addon_id int auto_increment,
  addon_name varchar(30),
  addon_price int,
  menu_id int,
  primary key (addon_id),
  foreign key (menu_id) references menu (menu_id) on
    delete cascade on
    update cascade
);