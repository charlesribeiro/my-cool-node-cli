const chalk = require('chalk');

export const logInfo = (message: string): void => {
    console.log(chalk.blue(message));
};

export const logError = (message: string): void => {
    console.error(chalk.red(message));
};

module.exports = logInfo;
module.exports = logError;