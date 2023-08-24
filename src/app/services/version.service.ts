import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  public version = '1.0.0';

  public getVersion(): string {
    return 'Version ' + this.version;
  }
}
