const fs                = require('fs');
const models            = require('../../util').models;
const loadFile          = require('../../util').loadFile;
const loadModelJSON     = require('../../util').loadModelJSON;
const getObjectByIdLine = require('../../util').getObjectByIdLine;
const checkExitsIdinLine = require('../../util').checkExitsIdinLine;

exports.process = async (sourceFile)=>{
    try{        
        const modelJSON = loadModelJSON(models.doccob_30);
        const file  = await loadFile(sourceFile);
        let id;
        let fieldObj = {};
        let lineRules = {};
        
        file.on('line', (line)=>{        
            
            id = checkExitsIdinLine(line, modelJSON);
            lineRules = getObjectByIdLine(id, modelJSON);
            
            if( (lineRules.id === id)){
                const fields = lineRules.fields;                
                for(let field in fields){                    
                    fieldObj = fields[field];
                    let value = line.substr( fieldObj.startPosition-1, fieldObj.size );                   
                    console.log(value);                    
                }
            }
        });      

    }catch(error){
        throw `Tried to process file doccob 3.0 ${error} `;
    }
}
