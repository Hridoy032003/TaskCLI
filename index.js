// index.js
import readline from 'readline';
import { weather } from './tasks/weather.js'; 
import { string } from './tasks/stringMod.js';
import fileManu from './tasks/fileManup.js'
import chalk from 'chalk';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


export const taskMenu = () => {
    console.log(chalk.blue('\n1-File Management'));
    console.log(chalk.blue('2-Modify String'));
    console.log(chalk.blue('3-Today\'s Weather'));
    rl.question(chalk.yellow("Choose Option: "), handleOption);
};


const handleOption = async (option) => {
    if (option === '1') {
     fileManu(rl)
   
    } else if (option === '2') {
        await string(rl)
        taskMenu();
    } else if (option === '3') {
        await weather(rl); 
        taskMenu(); 
    } else {
        console.log(chalk.red("Invalid Option. Please choose a correct one!"));
        taskMenu();
    }
};

taskMenu();  
