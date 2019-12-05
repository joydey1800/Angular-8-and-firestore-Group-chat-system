import { Injectable } from '@angular/core';
import { Message } from '../shared/message.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SavedataService {
  formData: Message;

  constructor(private firestor: AngularFirestore) { }


  getMsg() {
    return this.firestor.collection('message').snapshotChanges();
  }
}
