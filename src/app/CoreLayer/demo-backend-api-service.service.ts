import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, Subscriber } from 'rxjs';
import { ViewItem } from '../Models/view-item';

@Injectable({
  providedIn: 'root'
})
export class DemoBackendApiServiceService {

  readonly API = "";

  constructor() { }

  getViewItems$(): Observable<ViewItem[]> {

    let demoItems:ViewItem[] = new Array<ViewItem>();
    let id=0;

    for(let y=0;y<14;y++)
    {
      for(let x=0;x<19;x++)
      {
        let newItem:ViewItem={
          id: id+'',
          title: id+'',
          width: 50,
          height: 50,
          x: x*50,
          y: y*50
        };
        demoItems.push(newItem);
        id++;
      }
    }
    
    let viewObservable:Observable<ViewItem[]> = new Observable (subscriber=> {
      subscriber.next(demoItems);
    })
    
    return viewObservable;
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
      const storage = window.localStorage;
      storage.setItem("demoitems",JSON.stringify(items));
  }

  loadFromLocalStorage():ViewItem[]|null {
      const storage = window.localStorage;
      const items = storage.getItem("demoitems");
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
