var mysql = require('mysql');

exports.query = function()myQuery, myValues, callback{
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'christopher',
        password: '5426212' ,
        database: 'ecommerce'
    });



    connection.connect();


    connection.query(myQuery, myValues, function(error, results, fields){


        if (error) throw error;

        connection.end();

        callback(results);


    });
}
