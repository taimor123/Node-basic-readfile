const fs = require('fs');
// const textin = fs.readFileSync('./index.txt','utf-8');
// console.log(textin);


// const textout = `back ticks ${Date.now()}`;
// fs.writeFileSync('./index.txt',textout);
// console.log("file written");

 fs.readFile('./start.txt', 'utf-8', (err,data1)=>{
    if(err) return console.log('ERROR');
    fs.readFile(`./${data1}.txt`, 'utf-8', (err, data2) =>{
        console.log(data2);
        fs.readFile('./append.txt', 'utf-8', (err, data3)=>{
            console.log(data3);

            fs.writeFile('./final.txt', `${data2}\n${data3}`, 'utf-8', err=>{
                console.log('Your data is written');
            } )
        });
    });
 });
console.log('will read file');