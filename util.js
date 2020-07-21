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

const getObjectByIdLine = (id, modelJSON )=>{
    const model = modelJSON.model.lines.filter( (item)=>{
        return item.id === id;
    })
    if(model.length > 0){
        return model[0];
    }
    return {};
    
}

const checkExitsIdinLine = (line , modelJSON)=>{

    const linesModel = modelJSON.model.lines.filter( (item)=>{
        
        const id = line.substr(item.startPosition-1, item.size);
        if(item.id === id){
            return item;
        }

    });
    if(linesModel.length > 0) return linesModel[0].id;
    return 0;
}


module.exports = {
    fileTypes,
    models,
    loadModelJSON,
    loadFile,
    getObjectByIdLine,
    checkExitsIdinLine,
}