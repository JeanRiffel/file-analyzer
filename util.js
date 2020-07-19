const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

fileTypes = {
    notfis_30  : 1,
    doccob_30  : 2,
    ocoren_30  : 3,
}


models = {
    doccob_30 : './proceda/models/doccob-model.json'    
}

const loadModelJSON = (model)=>{
    try{
        const data  =  fs.readFileSync(model);
        return JSON.parse(data);    
    }catch(error){
        throw error;        
    }
};

const loadFile = (sourceFile)=>{
    return new Promise((resolve, reject)=>{
        try{
            let instream = fs.createReadStream(sourceFile);
            let outstream = new stream();
            resolve(readline.createInterface(instream, outstream));
        }catch(error){
            reject(error);
        }
    });
};

module.exports = {
    fileTypes,
    models,
    loadModelJSON,
    loadFile,
}