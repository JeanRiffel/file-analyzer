const fileTypes = require('./util').fileTypes;
const doccob30    = require('./proceda/doccob/doccob-30');

const main = ()=>{
    try{
        console.log("Initializing...");    
        const sourceFile = process.argv[2];             // sourceFile
        const fileType   = parseInt(process.argv[3]);   // fileType

        switch (fileType){
            case fileTypes.doccob_30 :
                doccob30.process(sourceFile);
                break;
            default : 
                throw "File type is not valid";
        }
        
    }catch(error){
        console.error(`Sorry something went wrong...\n${error}`);
    }
}

main();