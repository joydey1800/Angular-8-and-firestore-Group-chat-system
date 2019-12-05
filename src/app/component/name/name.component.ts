import { Component, OnInit } from '@angular/core';
import { SavedataService } from 'src/app/shared/savedata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  name: string;
  constructor(private savedata: SavedataService,
    private router: Router) { }

  ngOnInit() {
  }

  chatPage() {
    localStorage.setItem('name', this.name);
    sessionStorage.setItem('name', this.name);
    this.router.navigate(['inbox']);
  }
}
