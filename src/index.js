require('dotenv').config();

// now here we import our server from app and after that we are gonna innitialize the server in this file
const app = require('./app');
require('./database');

// this function has the mission of initialize the program
async function main(){
    // The server will listen in the port 4000
   await app.listen(app.get('port'));
    console.log('Server on port ', app.get('port'));
}
// we call main
main();



