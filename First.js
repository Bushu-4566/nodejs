const fs=require('fs');
fs.writeFile("output.txt", "Writing File", (err) => {
    if(err)console.log("error occur");
    else console.log("file written");
});

console.log(":bushu");
