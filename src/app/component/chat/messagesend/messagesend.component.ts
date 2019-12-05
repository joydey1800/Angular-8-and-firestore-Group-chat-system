import { Component, OnInit } from '@angular/core';
import { SavedataService } from '../../../shared/savedata.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-messagesend',
  templateUrl: './messagesend.component.html',
  styleUrls: ['./messagesend.component.css']
})
export class MessagesendComponent implements OnInit {



  constructor(public saveData: SavedataService,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.saveData.formData = {
      id: null,
      fullName: localStorage.getItem('name'),
      messagess: ''
    }
  }

  sendMsg(form: NgForm) {
    let data = form.value;
    this.firestore.collection('message').add(data);
    this.resetForm(form);
  }



}
