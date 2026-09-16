const fs = require('fs');
/*fs.writeFile('example.txt', 'Hello, World!', 'utf8', (err) => {
    if (err) {
        console.error('Error creating file:', err);  
        return;
    }
    console.log('Create File run successfully');   

});*/
// const data = fs.readFileSync('example.txt', 'utf8');
// console.log('file content is:', data);
/*fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }
    console.log('file content is:', data);
        
    }
    */
   //append
   /*fs.appendFile('example.txt', '\nThis is an appended line.', 'utf8', (err) => {
    if (err) {
        console.log('Error appending to file:', err);}
        else
        {
            console.log('Append File run successfully');
        }
        return;
    })*/
    //updated read
    fs.writeFile('sample4.txt', 'This is the updated content.', 'utf8', (err) => {
        if (err) {
            console.log('Error updating file:', err);}
            else
            {
                console.log('Update File run successfully');
            }
    //delete

    fs.unlink('sample4.txt', (err) => {
        if (err) {
            console.log('Error deleting file:', err);} 
            else
            {
                console.log('Delete File run successfully');
            }       
            return 0;
        })
