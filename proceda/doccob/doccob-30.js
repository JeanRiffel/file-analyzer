const fs            = require('fs');
const models        = require('../../util').models;
const loadFile      = require('../../util').loadFile;
const loadModelJSON = require('../../util').loadModelJSON;

exports.process = async (sourceFile)=>{
    try{        
        const modelJSON = loadModelJSON(models.doccob_30);
        const file  = await loadFile(sourceFile);
        let id;

        file.on('line', (line)=>{
            
            id = line.substr(0,3);
            
            

            console.log(line);

        });      



    }catch(error){
        throw `Tried to process file doccob 3.0 ${error} `;
    }

}
