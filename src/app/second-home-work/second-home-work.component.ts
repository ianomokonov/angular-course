import { Component, OnInit } from '@angular/core';
import { ApiService, RepositoriesRequest } from './api.service';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, filter } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'course-second-home-work',
  templateUrl: './second-home-work.component.html',
  styleUrls: ['./second-home-work.component.css']
})
export class SecondHomeWorkComponent implements OnInit {
  repos: RepositoriesRequest;
  inProgress = false;
  searchControl = new FormControl();
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      switchMap(str => {
        if(str){
          return this._apiService.getRepositories(str);
        }
        return of(null)
      }))
      .subscribe((repos) => this.repos = repos);
  }
  

}
