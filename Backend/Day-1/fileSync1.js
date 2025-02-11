const fs=require("node:fs");
function myReadFile(){
try{
const data=fs.readFileSync("dummy.txt","utf-8");
console.log("File Data",data);
}
catch(err){
cosole.log("File Reading error:",err.message);
}}
const myWriteFile=(data)=>{
    try{
        fs.writeFileSync("dummy.txt",data);
        console.log("Successfully write file")
    }
    catch(err){
        console.log("File writing error:",err.message);
    }
}
const myAppendFile=()=>{
    try{
        fs.appendFileSync("dummy.txt",data);
        console.log("Appended data successfully")
    }
    catch(err){
        console.log("File appending error:",err.message);
    }
}
const myDeleteFile=(filename)=>{
    try {
        fs.unlinkFileSync("dummy.txt",data);
        console.log("Deletion data successfully")
    } catch (err) {
        console.log("File Deletion error:",err.message);
    }
}
myReadFile();
const data=" Hello Prateek. How are you?"
myAppendFile(data);
myReadFile();
myDeleteFile("dummy.txt");
myReadFile();