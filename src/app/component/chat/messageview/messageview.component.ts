import { Component, OnInit } from '@angular/core';
import { SavedataService } from 'src/app/shared/savedata.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Message } from '../../../shared/message.model';


@Component({
  selector: 'app-messageview',
  templateUrl: './messageview.component.html',
  styleUrls: ['./messageview.component.css']
})
export class MessageviewComponent implements OnInit {



  sotrename = localStorage.getItem('name');
  list: Message[];

  constructor(private saveData: SavedataService,
    private firestor: AngularFirestore) { }

  ngOnInit() {
    this.saveData.getMsg().subscribe(res => {
      this.list = res.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Message
      })
    });
  }




}
