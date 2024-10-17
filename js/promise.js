const mypromise= new Promise(
    (resolve,reject)=>{
        console.log("excute promise");
       // resolve ();       "make reject commet and run this"
       reject("Network error");
    });
mypromise.then(()=>{
    console.log("All set!");
}).catch((err)=>{
    console.log("error is",err);
}).finally(()=>{
    console.log("executed final block");
})