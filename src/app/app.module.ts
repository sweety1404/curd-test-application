import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CurdFormComponent } from './components/curd-form/curd-form.component';
import { CurdTableComponent } from './components/curd-table/curd-table.component';
import { UserService } from './services/user.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    CurdFormComponent,
    CurdTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: []
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
