import { Component } from '@angular/core';
import { VersionService } from 'src/app/services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  version: string | undefined;

  constructor(private versionService: VersionService) {}

  ngOnInit(): void {
    this.version = this.versionService.getVersion();
  }
}
