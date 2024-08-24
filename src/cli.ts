// // import clear from 'clear';
import chalk from "chalk";
import figlet from "figlet";
import { createFolderCommand } from "./commands/create-folder.js";

// // clear();

console.log(
    chalk.green(
        figlet.textSync('My cool CLI', { horizontalLayout: 'full' })
    )
);

(async () => {
    try {
        await new Promise<void>((resolve, reject) => {
            createFolderCommand('../../testes/').subscribe({
                next: () => resolve(),
                error: (err) => reject(err),
                complete: () => resolve(),
            });
        }); console.log(chalk.blue('Folder and file created successfully!'));
    } catch (error) {
        console.error(chalk.red('Error:', error));
    }
})();
