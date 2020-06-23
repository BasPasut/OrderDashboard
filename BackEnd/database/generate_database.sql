drop database if exists OrderDashboard;
create database OrderDashboard;
use OrderDashboard;
create table Customer (
  customerId int auto_increment,
  customerName varchar(30) not null,
  customerTel varchar(10),
  customerLocation varchar(120),
  primary key(customerId)
);

create table Orders (
  orderId int auto_increment,
  orderDate date,
  customerId int,
  primary key (orderId),
  foreign key (customerId) references Customer (customerId) on
    delete cascade on
    update cascade
);

create table Menu (
  menuId int auto_increment,
  menuName varchar(30),
  menuPrice int,
  orderId int,
  primary key (menuId),
  foreign key (orderId) references Orders (orderId) on
    delete cascade on
    update cascade
);

create table Addon (
  addonId int auto_increment,
  addonName varchar(30),
  addonPrice int,
  menuId int,
  primary key (addonId),
  foreign key (menuId) references Menu (menuId) on
    delete cascade on
    update cascade
);