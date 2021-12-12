const { application } = require('express');

var express = require('express');
var app = express();

var mysql = require('mysql');
var cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/productos', getProductos);

function getProductos(req,res){
    //Step 0 : Definir la conexion a la BD 
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'christopher',
        password: '5426212' ,
        database: 'ecommerce'
    });
    //Step 1 : Establecer la conexion
    connection.connect();
    //Step 2 : Mandar el query
    var myQuery =  " SELECT * " +
                   " FROM products;";

    connection.query(myQuery, function(error, results, fields){
        //Ya tengon el resultado del query en 'results'

        //Step 3 : Procesar el resultado de la BD   
    res.send(results);
        //Step 4: Cerrar la conexion
        
    connection.end();
    });
}

//------------------------POST--------------------------

app.post('/productos', function(req, res){
    // Step 0: Definir la conexion a la BD
    var connection = mysql.createConnection({
       host: 'localhost',
       user: 'christopher',
       password: '5426212',
       database: 'ecommerce'
   });
    // Step 1: Establecer la conexion
    connection.connect();

    // ;Step 2: Mandar el query
    var myQuery =   "INSERT INTO products(product_id,product_name,"+
            "stock,price,category,descripcion,created_date,modified_date)"+
            "VALUES (?,?,?,?,?,?,NOW(),NOW());";
    
    // Guardando como arreglo
    var myValues = [req.body.product_id, req.body.product_name, req.body.stock, req.body.price, req.body.category,req.body.descripcion, req.body.created_date,req.body.modified_date];

    connection.query(myQuery, myValues, function(error, results, fields){
        // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
        if (error) throw error;
        
        // Step 3: Procesar el resultado de la BD 
        res.send(results);

        // Step 4: Cerrar la conexion
        connection.end();
    });
});

//---------------------DELETE--------------------------
app.delete('/productos/:product_id', function(req, res){
    // the member_id value will be received in req.params.member_id
    // Step 0: Definir la conexion a la BD
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'christopher',
    password: '5426212',
    database: 'ecommerce'
  });
  
  // Step 1: Establecer la conexion
  connection.connect();
  
  // ;Step 2: Mandar el query
  var myQuery = " DELETE FROM products " +
                " WHERE product_id = ? ; ";
  
  var myValues = [ req.params.product_id ];
  
  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);
  
    // Step 4: Cerrar la conexion
    connection.end();
  });
  
  });

//--------------------------------------------PUT---------------------------------------------------------------
   app.put('/productos/:product_id', function(req, res){
     // Step 0: Definir la conexion a la BD
     var connection = mysql.createConnection({
       host: 'localhost',
       user: 'christopher',
       password: '5426212',
       database: 'ecommerce'
     });
  
     // Step 1: Establecer la conexion
     connection.connect();
  
     // Step 2: Mandar el query
     var myQuery = " UPDATE products SET modified_date = NOW() ";
     var myValues = [ ];
    
    
     if (req.body.product_name){
       myQuery += " , product_name = ? ";
       myValues.push(req.body.product_name);
     }
  
     if (req.body.stock){
       myQuery += " , stock = ? ";
       myValues.push(req.body.stock);
     }
  
     if (req.body.price){
       myQuery += " , price = ? ";
       myValues.push(req.body.price);
     }
  
     if (req.body.category){
       myQuery += " , category = ? ";
       myValues.push(req.body.category);
     }
  
     if (req.body.descripcion){
        myQuery += " , descripcion = ? ";
        myValues.push(req.body.descripcion);
      }

      if (req.body.created_date){
        myQuery += " , created_date = ? ";
        myValues.push(req.body.created_date);
      }


      if (req.body.modified_date){
        myQuery += " , modified_date = ? ";
        myValues.push(req.body.modified_date);
      }


     myQuery += " WHERE product_id = ? "
     myValues.push(req.params.product_id);
  
     connection.query(myQuery, myValues, function(error, results, fields){
       // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
       if (error) throw error;
      
       // Step 3: Procesar el resultado de la BD
       res.send(results);
  
       // Step 4: Cerrar la conexion
       connection.end();
     });
   });


  

app.listen(3000, function(){
    console.log("Server started in port 3000!")
})

