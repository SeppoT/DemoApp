import { Component, OnInit } from '@angular/core';
import { AppFacade } from 'src/app/AbstractionLayer/app-facade';
import { ViewItem } from 'src/app/Models/view-item';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title','position'];

  constructor(public appFacade:AppFacade) { }

  ngOnInit(): void {
    this.appFacade.reloadViewItems();
  }

  itemChanged(viewitem:ViewItem) {
    this.appFacade.updateViewItem(viewitem);    
  }

}
