import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, Subscriber } from 'rxjs';
import { ViewItem } from '../Models/view-item';

@Injectable({
  providedIn: 'root'
})
export class DemoBackendApiServiceService {

  readonly API = "";

  randomIcons:Array<string>=new Array<string>();

  constructor() {
    this.fillIconArray();
   }

  getViewItems$(): Observable<ViewItem[]> {

    let demoItems:ViewItem[] = new Array<ViewItem>();
    let id=0;

    for(let y=0;y<14;y++)
    {
      for(let x=0;x<1;x++)
      {
        let newItem:ViewItem={
          id: id+'',
          title: id+'',
          width: 50,
          height: 50,
          x: x*50,
          y: y*50,
          icon: this.getRandomIcon(this.randomIcons)
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

getRandomIcon(icons:Array<string>):string
{
  return icons[Math.floor(Math.random()*icons.length)];
}

fillIconArray():void
{
  this.randomIcons.push('https://upload.wikimedia.org/wikipedia/commons/0/01/Military_Symbol_-_Friendly_Unit_%28Bichrome_1.5x1_Frame%29-_Headquarters_Unit_%28NATO_APP-6%29.svg');
  this.randomIcons.push('https://upload.wikimedia.org/wikipedia/commons/b/b7/Military_Symbol_-_Friendly_Unit_%28Bichrome_1.5x1_Frame%29-_Infantry_-_Mounted_%28NATO_APP-6A_inspired%29.svg');
  this.randomIcons.push('https://upload.wikimedia.org/wikipedia/commons/f/f1/Military_Symbol_-_Friendly_Unit_%28Bichrome_1.5x1_Frame%29-_Infantry_-_Light_Infantry_%28NATO_APP-6A%29.svg');
  this.randomIcons.push('https://upload.wikimedia.org/wikipedia/commons/5/57/Military_Symbol_-_Friendly_Unit_%28Bichrome_1.5x1_Frame%29-_Armour_%28NATO_APP-6%29.svg');
  this.randomIcons.push('https://upload.wikimedia.org/wikipedia/commons/d/da/Military_Symbol_-_Friendly_Unit_%28Bichrome_1.5x1_Frame%29-_Artillery_%28NATO_APP-6%29.svg');
  this.randomIcons.push('https://upload.wikimedia.org/wikipedia/commons/9/9f/Military_Symbol_-_Friendly_Unit_%28Bichrome_1.5x1_Frame%29-_Psychological_Operations_%28NATO_APP-6%29.svg');
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
