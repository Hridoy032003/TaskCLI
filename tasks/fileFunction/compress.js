import chalk from 'chalk'
import fs from 'fs'
import zlib from 'zlib'

export const compressFile = () => {

  const inStream = fs.createReadStream('./fileOpration/demo.txt')
  

  const outStream = fs.createWriteStream('./fileOpration/demo.text.gz')


  const gZip = zlib.createGzip()


  inStream.pipe(gZip).pipe(outStream)
  
  console.log(chalk.green("File Compressed"))
}
