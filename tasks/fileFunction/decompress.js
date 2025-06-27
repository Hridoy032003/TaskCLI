import chalk from 'chalk'
import fs from 'fs'
import zlib from 'zlib'
     
   export const decompressFile=()=>{
    const inStream=fs.createReadStream('./fileOpration/demo.text.gz')
    const outStream = fs.createWriteStream('./fileOpration/deExtract.text');
    const unZip = zlib.createUnzip();


    inStream.pipe(unZip).pipe(outStream);
    console.log(chalk.green("File Decompressed"));
   }