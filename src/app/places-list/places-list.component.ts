import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'course-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {
  @Output() change = new EventEmitter<any>();

  items:any = [];
  currentItems:any = [];
  _currentItem:any;
  headers:any;
  constructor(private _http:HttpClient) { }

  ngOnInit() {
    this._http.get("../../assets/files/weather.json").subscribe(x => {
      this.items = x;
      this.headers = [...new Set(this.items.map(x => x.type))];
      this.curItemsType = this.items[0].type;
    })
  }
  chooseType(type){
    this.curItemsType = type;
  }
  chooseCurrentItem(id){
    this.currentItem = this.currentItems.find(x => x.id == id);
    
  }
  set curItemsType(type){
    this.currentItems = this.items.filter(x => x.type == type);
    this.currentItem = this.currentItems[0];
  }

  set currentItem(item){
    this._currentItem = item;
    this.change.emit(this._currentItem);
  }

  get currentItem(){
    return this._currentItem;
  }

}
