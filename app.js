const fileTypes = require('./util').fileTypes;
const doccob30    = require('./proceda/doccob/doccob-30');

const main = ()=>{
    try{
        console.log("Initializing...");    

        const sourceFile = process.argv[2];             // sourceFile
        const fileType   = parseInt(process.argv[3]);   // fileType

        if(sourceFile === undefined) { throw `Please type the first parameter as a source file e.g doccob.txt`;}
        if(isNaN(fileType) ) { throw `Please type the second parameter as a type of file 
                                      List of file types available:
                                            notfis_30 - [1]
                                            doccob_30 - [2]
                                            ocoren_30 - [3]`;}

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