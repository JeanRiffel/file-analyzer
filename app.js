const fs = require('fs');

const loadFile = (sourceFile)=>{
    fs.readFile(file, "utf-8" , (err, data)=>{
        console.log(data);
    });
}

const loadModelJSON = ()=>{
    const data  =  fs.readFileSync('model.json');
    const model = JSON.parse(data);
    return model;
};

const main = ()=>{
    console.log("Initializing...");    
    const file = process.argv[2];
    const model = loadModelJSON();

    console.log(model);

}


main();