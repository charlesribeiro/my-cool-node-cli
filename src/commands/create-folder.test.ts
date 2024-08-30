import fs from 'fs';
import { Observable } from 'rxjs';
import { createFolderCommand } from './create-folder';

describe('createFolderCommand', () => {
  it('should create a folder and hello.txt file', (done) => {
    const folderName = './test-folder';

    const observable: Observable<void> = createFolderCommand(folderName);

    observable.subscribe({
      next: () => {
        expect(fs.existsSync(folderName)).toBe(true);
        expect(fs.existsSync(`${folderName}/hello.txt`)).toBe(true);
        done();
      },
      error: (err) => {
        done.fail(err);
      },
    });
  });
});
