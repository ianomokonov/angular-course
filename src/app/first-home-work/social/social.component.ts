import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input() data:any = null;

  constructor() { }

  ngOnInit() {
  }

}
