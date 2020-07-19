const fs = require('fs');

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
             fs.readFile(sourceFile, "utf-8" , (err, data)=>{
                if(err) reject(err);  
                resolve(data);
            });
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