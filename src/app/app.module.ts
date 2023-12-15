import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { DigitOnlyDirective, ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, DigitOnlyDirective],
  imports: [BrowserModule, FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
