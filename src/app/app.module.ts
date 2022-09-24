import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JurosSimplesComponent } from './Components/juros-simples/juros-simples.component';
import { JurosCompostosComponent } from './Components/juros-compostos/juros-compostos.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    JurosSimplesComponent,
    JurosCompostosComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
