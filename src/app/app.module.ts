import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NameComponent } from './component/name/name.component';
import { ChatComponent } from './component/chat/chat.component';
import { MessageviewComponent } from './component/chat/messageview/messageview.component';
import { MessagesendComponent } from './component/chat/messagesend/messagesend.component';
import { SavedataService } from './shared/savedata.service';

export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};



@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    ChatComponent,
    MessageviewComponent,
    MessagesendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: NameComponent
      },
      {
        path: 'inbox',
        component: ChatComponent
      }
    ])

  ],
  providers: [SavedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
