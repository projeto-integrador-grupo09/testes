drop database if exists dh_sports;
create database dh_sports;
use dh_sports;
create table administradores (
id INT not null auto_increment primary key,
nome varchar(120) not null,
email varchar(45) unique not null,
senha varchar(64)
);


create table clientes (
id INT not null auto_increment primary key,
nome varchar(120) not null,
email varchar(45) unique not null,
senha varchar(64),
createdAt timestamp not null,
updateAt timestamp null,
deletedAt timestamp null
);


create table categorias (
id INT not null auto_increment primary key,
nome varchar(120) not null
);

create table forma_de_pagamento (
id INT not null auto_increment primary key,
nome varchar(120) not null
);

create table produtos (
id INT not null auto_increment primary key,
nome varchar(45) not null,
preco decimal(6,2) not null,
categorias_id INT not null,
FOREIGN KEY (categorias_id) REFERENCES categorias(id) ON DELETE RESTRICT ON UPDATE CASCADE
);

create table enderecos (
id INT not null auto_increment primary key,
clientes_id INT not null,
bairro varchar(45) not null,
logradouro varchar(250) not null,
numero varchar(6),
cidade varchar(120),
cep varchar(8),
FOREIGN KEY (clientes_id) REFERENCES clientes(id) ON DELETE RESTRICT ON UPDATE CASCADE
);


create table pedidos (
id INT not null auto_increment primary key,
enderecos_id INT not null,
clientes_id INT not null,
forma_de_pagamento_id INT not null,
FOREIGN KEY (forma_de_pagamento_id) REFERENCES forma_de_pagamento(id) ON DELETE RESTRICT ON UPDATE CASCADE,
FOREIGN KEY (clientes_id, enderecos_id) REFERENCES enderecos(clientes_id, id) 
);
create table produtos_x_pedidos (
pedidos_id INT,
produtos_id INT,
quantidade DECIMAL(5,2) not null,
FOREIGN KEY (pedidos_id) REFERENCES pedidos(id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (produtos_id) REFERENCES produtos(id) ON DELETE RESTRICT ON UPDATE CASCADE,
primary key (pedidos_id, produtos_id)
);



create table imagens(
	id int not null primary key auto_increment,
    produtos_id int not null,
    caminho varchar(256) not null,
    FOREIGN KEY (produtos_id) REFERENCES produtos(id)
); 



insert into clientes (id,nome,email,senha,createdAt)values 
(1,'Mari','mari@gmail.com','1234',now()),
(2,'Thiago','thiago@gmail.com','4321',now()),
(3,'caio','caio@gmail.com','7532',now());

insert into categorias (id,nome) values
(1,"Masculino"),
(2,"feminino"),
(3,"Infantil"),
(4,"Esportes"); 

insert into forma_de_pagamento (id,nome) values
(1,"Deposito"),
(2,"pix"),
(3,"cartao"),
(4,"boleto");

insert into produtos (id,nome,preco,categorias_id) values
(1,"Camisa Espanha",350,1),
(2,"Camisa Argentina",359,1),
(3,"Camisa Alemanha",350,1),
(4,"Camisa Brasil",350,1),
(5,"Camisa Inglaterra",350,1),
(6,"Camisa Uruguai",350,1),
(7,"Camisa Japao",350,1);

insert into enderecos (id,clientes_id,bairro,logradouro,numero,cidade,cep) values
(1,1,"bela vista","rua modesto de paiva","126","belo horizonte","36301026"),
(2,2,"jardim acacia","rua das flores","16","sao paulo","63709040");

insert into pedidos (id,enderecos_id,clientes_id,forma_de_pagamento_id) values
(1,1,1,2);
insert into produtos_x_pedidos (pedidos_id,produtos_id,quantidade ) values
(1,2,2); 

insert into administradores (id,nome,email,senha) values
(1,"Dudu","dudu@dhsports.com",123456),
(2,"Ligia","ligia@dhsports.com",654321),
(3,"Sergio","sergio@dhsports,com",123456);