const fs = require('fs').promises;
/*async function writefile() {
    try{
        await fs.writeFile('sample4.txt', 'This is the updated content.', 'utf8');
        console.log('Update File run successfully');
    }
    catch(err){
        console.log('Error updating file:', err);
    }
}
writefile();*/
//read file
/*async function readfile() {
    try{
        const data = await fs.readFile('sample4.txt', 'utf8');
        console.log('file content is:', data);  
    }catch(err){
        console.log('Error reading file:', err);
    }   
}
readfile();*/
//rename file
/*async function renamefile() {
    try{
        await fs.rename('sample5.txt', 'samplerename.txt');
        console.log('Rename File run successfully');
    }
    catch(err){
        console.log('Error renaming file:', err);
    }
}
renamefile();*/
//update
async function append file(){
    try {
        await fs.appendFile("promise.txt","\welcome to fsd training")
    }
}
