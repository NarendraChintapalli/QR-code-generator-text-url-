/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from 'qr-image';
import inquirer from "inquirer";
import fs from 'fs';


inquirer
.prompt([{"message":"type your url",
  "name":"url"
}])
.then((answer)=>{
  const text=answer.url;
  const qr_img=qr.image(text,{type:'png'});
  qr_img.pipe(fs.createWriteStream('qr_image.png'));
  fs.writeFile('url.text',answer.url,(err)=>{
    if(err) throw err;
    else{
      console.log("qr created successfully");
    }
  })
 
})

