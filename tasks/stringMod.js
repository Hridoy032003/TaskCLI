
import chalk from 'chalk';


    export const string = (rl) => {
        return new Promise((resolve) => {
            rl.question("Enter String: ", (inputString) => {
                console.log('\n1-Find Length');
                console.log('2-To UpperCase');
                console.log('3-To LowerCase');
                console.log('4-To Repeat');
    
                rl.question('Choose str Modification: ', (modification) => {
                    switch (modification) {
                        case '1':
                            console.log(chalk.green(`Length: ${inputString.length}`));
                            resolve();
                            break;
                        case '2':
                            console.log(chalk.green(`Uppercase: ${inputString.toUpperCase()}`));
                            resolve();
                            break;
                        case '3':
                            console.log(chalk.green(`Lowercase: ${inputString.toLowerCase()}`));
                            resolve();
                            break;
                        case '4':
                            rl.question('Enter number of times to repeat: ', (times) => {
                                const num = parseInt(times, 10);
                                if (isNaN(num) || num < 0) {
                                    console.log('Invalid number.');
                                } else {
                                    console.log(chalk.green(`Repeated: ${inputString.repeat(num)}`));
                                }
                                resolve(); 
                            });
                            break;
                        default:
                            console.log('Invalid modification choice.');
                            resolve();
                            break;
                    }
                });
            });
        });
    };
    


