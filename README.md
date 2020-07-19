# file-analyzer

# Description

The file-analyzer is a NodeJs app for analysis a structure of a file which must follow a pre-defined layout.

# Steps

* 1 - The file called model is the layout of the file built into a JSON file which contain every rules.
* 2 - Then the idea is submit the source file to a routine and load the Model to check whether all rules are followed.
* 3 - As a result is expected receive a report with either lines or fields which contains errors.

# How it works

* 1 - Call the app using node app.js "sourceFile" "typeFile"

    #### Parameters
    * - sourceFile - File which the user want to analyze.
    * - typeFile   - The type of files are: 
                        notfis_30  : 1
                        doccob_30  : 2
                        ocoren_30  : 3






