import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-first-home-work',
  templateUrl: './first-home-work.component.html',
  styleUrls: ['./first-home-work.component.css']
})
export class FirstHomeWorkComponent implements OnInit {

  constructor() { }
  item:any = null;
  updateItem(item){
    this.item = item;
  }
  ngOnInit() {
  }

}
