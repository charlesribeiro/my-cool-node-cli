import fs from 'fs';
import { Observable } from 'rxjs';

export const createFolderCommand = (folderName: string): Observable<void> => {

    return new Observable((observer) => {
        fs.mkdir(folderName, { recursive: true }, (err) => {
            if (err) {
                console.error('Error creating folder:', err);
                observer.error(err);
                return;
            }
            
            fs.writeFile(`${folderName}/hello.txt`, 'Hello, world!', (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                    observer.error(err);
                } else {
                    observer.next();
                    observer.complete();
                }
            });
        });
    });
};
