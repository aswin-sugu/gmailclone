import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { MailComponent } from './mail/mail.component';
import { MailviewComponent } from './mailview/mailview.component';
import { HeaderComponent } from './header/header.component';
import { InboxComponent } from './inbox/inbox.component';
import { OutboxComponent } from './outbox/outbox.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    MailComponent,
    MailviewComponent,
    HeaderComponent,
    InboxComponent,
    OutboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
