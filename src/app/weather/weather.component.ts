import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() data:any = null;

  constructor() { }

  ngOnInit() {
  }

}
