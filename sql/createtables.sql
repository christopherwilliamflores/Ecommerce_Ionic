CREATE DATABASE ecommerce;

CREATE TABLE products(
    product_id int NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(20),
    stock int ,
    price DECIMAL(9,2),
    category  varchar(20),
    descripcion text(50) ,
    created_date datetime ,
    modified_date datetime ,ñ
    PRIMARY KEY (product_id)
);

CREATE TABLE purchase_order (
  purchaseorder_id INT,
  product_id INT,
  quantity INT,
  total_price DECIMAL(9,2),
  PRIMARY KEY (purchaseorder_id, product_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE client (
id_cliente INT,
client_name VARCHAR(15),
last_name VARCHAR(15),
email VARCHAR(16),
user_password VARCHAR(10),
PRIMARY KEY (id_cliente)
);
            

--Ejemplos insert

INSERT INTO products(`product_id`,`product_name`,`stock`,`price`,`category`,`descripcion`,`created_date`,'modified_date')
VALUES(1,'Polo Negro',10,19.99,"Ropa","Polo color negro, manga corta",NOW(),NOW());

INSERT INTO `ecommerce`.`products`
(`product_id`,`product_name`,`stock`,`price`,`category`,`created_date`,`descripcion`)
VALUES (2,'Polo Negro Blanco',3,23,"Ropa","Polo de dos colores",NOW(),NOW());



INSERT INTO products(`product_id`,`product_name`,`stock`,`price`,`category`,`descripcion`,`created_date`,'modified_date')
VALUES (?,?,?,?,?,?,NOW(),NOW());

"INSERT INTO products(product_id,product_name,"+
"stock,price,category,descripcion,created_date,modified_date)"+
"VALUES (?,?,?,?,?,?,NOW(),NOW());
