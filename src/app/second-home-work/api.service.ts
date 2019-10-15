import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService{
    constructor(private _http:HttpClient){}

    getRepositories(searchStr: string): Observable<RepositoriesRequest>{
        return this._http.get<RepositoriesRequest>(`https://api.github.com/search/users?q=${searchStr}`);
    }
}

export interface RepositoriesRequest {
    total_count: number;
    incomplete_results: boolean;
    items: [
        { 
            login: string;
            html_url: string;
            avatar_url: string;
        }
    ];
}