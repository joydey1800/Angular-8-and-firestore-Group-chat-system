import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.checktoken();
  }

  checktoken() {
    var storname = localStorage.getItem('name');
    if (storname == null) {
      this.router.navigate(['']);
    }
  }
  logout() {
    localStorage.removeItem('name');
    this.router.navigate(['']);
  }
}
