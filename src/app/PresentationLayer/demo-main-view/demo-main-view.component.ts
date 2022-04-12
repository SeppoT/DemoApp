import { Component, OnInit } from '@angular/core';
import { AppDataFacade } from 'src/app/AbstractionLayer/app-data-facade';
import { ViewItem } from 'src/app/Models/view-item';
import { IMainView } from '../imain-view';


@Component({
  selector: 'app-demo-main-view',
  templateUrl: './demo-main-view.component.html',
  styleUrls: ['./demo-main-view.component.css']
})
export class DemoMainViewComponent implements OnInit,IMainView {

  displayedColumns: string[] = ["id", "title","position"];

  constructor(public appDataFacade:AppDataFacade) {}

  ngOnInit(): void {
    this.reloadViewItems();
  }

  reloadViewItems():void
  {
    this.appDataFacade.reloadViewItems();
  }

  itemChanged(viewitem:ViewItem):void {
    this.appDataFacade.updateViewItem(viewitem);    
  }

}

