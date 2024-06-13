// // Import the mysql module
// import { createConnection } from 'mysql';

// class DatabaseUtility {
// // Create a connection object with the required details
// var connection = createConnection({
//   host     : '106.51.90.215',   // Replace with your database host
//   user     : 'root@%',          // Replace with your database username
//   password : 'root',      // Replace with your database password
//   database : 'projects'        // Replace with your database name
// });

// // Connect to the database
// connection.connect(function(err) {
//   if (err) {
//     console.error('Error connecting: ' + err.stack);
//     return;
//   }
//   console.log('Connected as id ' + connection.threadId);
// });

// // Execute a simple query
// connection.query('select * from projects;', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

// // Close the connection
// connection.end();
// }