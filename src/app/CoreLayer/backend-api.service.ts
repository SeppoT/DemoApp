import { Injectable } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './noop-interceptor';
import { Observable } from 'rxjs';
import { ViewItem } from '../Models/view-item';

@Injectable({
  providedIn: 'root'
})

export class BackendApiService {

  /** angular.json assets: { "glob": "viewitems.json", "input": "./", "output": "./assets/" } */
  readonly API = './assets/viewitems.json';

  constructor(private http: HttpClient) { }

  getViewItems$(): Observable<ViewItem[]> {
    return this.http.get<ViewItem[]>(this.API);
  }

  addViewItem(): Observable<any> | null {
    /** Backend not implemented */
    return null;
  }

  updateViewItem(): Observable<any> | null {    
    /** Backend not implemented */
    return null;
  }

  deleteViewItem(): Observable<any> | null {
    /** Backend not implemented */
    return null;
  }

  saveToLocalStorage(items:ViewItem[]):void {
    let storage = window.localStorage;
    storage.setItem('demoitems',JSON.stringify(items));
    
  }

  loadFromLocalStorage():ViewItem[]|null {
    let storage = window.localStorage;
    let items = storage.getItem('demoitems');
    if (items)
    {
      return JSON.parse(items);
    }
    else
    {
      return null;
    }
    
  }
}

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];



