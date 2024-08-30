import chalk from "chalk";
import figlet from "figlet";
import { createFolderCommand } from "./commands/create-folder.js";
import { logError, logInfo } from "./utils/logger.js";

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
        }); logInfo('Folder and file created successfully!');
    } catch (error) {
        logError(`Error: ${error}`);
    }
})();
