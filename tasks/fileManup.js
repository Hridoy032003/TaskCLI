
import chalk from 'chalk';
import { compressFile } from './fileFunction/compress.js';
import { decompressFile } from './fileFunction/decompress.js';
import { resolve } from 'path';


const fileManage=(option)=>{
    return new Promise((resolve)=>{
         
    if(option==="1"){
        compressFile();
     }else if(option==="2"){
         decompressFile();
     }else{
         console.log(chalk.red("Invalid Option. Please choose a correct one!"));
     }
     resolve()
    }
)

}


const fileManu=(rl)=>{
   console.log("1-compress File")
   console.log("2-decompress File")
   rl.question("choose Options:",fileManage)
}
export default fileManu

