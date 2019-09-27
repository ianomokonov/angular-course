import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';
  item:any = null;
  updateItem(item){
    console.log(item)
    this.item = item;
  }
}
