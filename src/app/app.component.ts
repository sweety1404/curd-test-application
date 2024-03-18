import { ApplicationRef, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curd-test-app';

  constructor() {
    this.bootstrap();
  }

  async bootstrap() {
    const appRef: ApplicationRef = await bootstrapApplication(Component);
    // Further initialization code using appRef
  }
}
