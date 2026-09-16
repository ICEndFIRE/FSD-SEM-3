const fs = require('fs');
//fs.mkdirSync('sample folder');
//node console.log('sample folder is created');

   // fs.rmdirSync('sample folder');
   // console.log('sample folder is deleted');
   if(fs.existsSync('sample folder')){
    console.log('sample folder is exist');
   }
   else
   {
    console.log('sample folder is not exist');
   }
   