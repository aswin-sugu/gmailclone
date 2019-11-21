import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InboxComponent } from './inbox/inbox.component';
import { OutboxComponent } from './outbox/outbox.component';
import { MailComponent } from './mail/mail.component';
import { MailviewComponent } from './mailview/mailview.component';

const routes: Routes = [
  {
    path:'',component:InboxComponent
  },
  {
    path:'inbox',component:InboxComponent
  },
  {
    path:'outbox',component:OutboxComponent
  },
  {
    path:'mailview/:id',
    component:MailviewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
