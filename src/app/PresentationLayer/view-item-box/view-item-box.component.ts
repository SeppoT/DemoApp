import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { ViewItem } from 'src/app/Models/view-item';

@Component({
  selector: 'app-view-item-box',
  templateUrl: './view-item-box.component.html',
  styleUrls: ['./view-item-box.component.css']
})
export class ViewItemBoxComponent {

  @Input() itemData!:ViewItem;
  @Output() itemChangeEvent = new EventEmitter<ViewItem>();

  @HostBinding('style.backgroundColor') get bgcolor() {return this.itemData.bgcolor??'#FFFFFF';}
  @HostBinding('style.color') get color() {return this.itemData.textcolor??'#000000';}
  
  @HostBinding('style.width') get width() {return this.itemData.width+'px'??'200px';}
  @HostBinding('style.height') get height() {return this.itemData.height+'px'??'200px';}
 
  @HostListener('cdkDragEnded',['$event'])
  componentDropped($event:any) {
    
    if(Number(this.itemData.x)+Number($event.distance.x)>0)
    {
      this.itemData.x=Number(this.itemData.x)+Number($event.distance.x);
    }
    else
    {
      this.itemData.x=0;
    }
 
    if(Number(this.itemData.x)>960-Number(this.itemData.width))
    {
      this.itemData.x=960-Number(this.itemData.width);
    }

    if(Number(this.itemData.y)+Number($event.distance.y)>0)
    {
      this.itemData.y=Number(this.itemData.y)+Number($event.distance.y);
    }
    else
    {
      this.itemData.y=0;
    }
    
    if(Number(this.itemData.y)>700-Number(this.itemData.height))
    {
      this.itemData.y=700-Number(this.itemData.height);
    }
    
    this.itemChangeEvent.emit(this.itemData);
  }

}
