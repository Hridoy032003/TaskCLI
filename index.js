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


const taskMenu = () => {
    console.log(chalk.blue('\n1-File Management'));
    console.log(chalk.blue('2-Modify String'));
    console.log(chalk.blue('3-Today\'s Weather'));
    rl.question(chalk.yellow("Choose Option: "), handleOption);
};


const handleOption = async (option) => {
    if (option === '1') {
        fileManu()
        taskMenu();
    } else if (option === '2') {
        await string()
        taskMenu();
    } else if (option === '3') {
        await weather(); 
        taskMenu(); 
    } else {
        console.log(chalk.red("Invalid Option. Please choose a correct one!"));
        taskMenu();
    }
};

taskMenu();  
