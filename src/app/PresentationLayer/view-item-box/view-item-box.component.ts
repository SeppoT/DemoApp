import { CdkDragEnd, CdkDragStart } from "@angular/cdk/drag-drop";
import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from "@angular/core";
import { ViewItem } from "src/app/Models/view-item";

@Component({
    selector: "app-view-item-box",
    templateUrl: "./view-item-box.component.html",
    styleUrls: ["./view-item-box.component.css"]
})
export class ViewItemBoxComponent {

  private zIndex:number=1;

  mouseDownDetailsVisible:boolean=false;
  dragDetailsVisible:boolean=false;
  mouseOverDetailsVisible:boolean=false;

  @Input() itemData!:ViewItem;
  @Input() boundaryX!:number;
  @Input() boundaryY!:number;

  @Output() itemChangeEvent:EventEmitter<ViewItem> = new EventEmitter<ViewItem>();
  @Output() itemDraggedEvent:EventEmitter<ViewItem> = new EventEmitter<ViewItem>();
  @Output() itemSelectedEvent:EventEmitter<ViewItem> = new EventEmitter<ViewItem>();
 
  @HostBinding("style.backgroundColor") get bgcolor() {
    if(this.mouseOverDetailsVisible){ return "#9ccf65"; }
      else { return this.itemData.bgcolor??"#FFFFFF";}
  }
  @HostBinding("style.color") get color() {return this.itemData.textcolor??"#000000";}
  
  @HostBinding("style.width") get width() {return this.itemData.width+"px"??"200px";}
  @HostBinding("style.height") get height() {return this.itemData.height+"px"??"200px";}
 
  @HostBinding("style.zIndex") get zindex() {return this.zIndex;}

  @HostListener("cdkDragEnded",["$event"])
  componentDropped($event:CdkDragEnd) {    

    let leftEdge:number=Number(this.itemData.x)+Number($event.distance.x);
    this.itemData.x=(leftEdge>0)?leftEdge:0;

    let topEdge:number=Number(this.itemData.y)+Number($event.distance.y);
    this.itemData.y=(topEdge>0)?topEdge:0;

    let rightEdge:number=Number(this.itemData.x)+Number(this.itemData.width);
    if(rightEdge>this.boundaryX) {this.itemData.x=this.boundaryX-Number(this.itemData.width);}
 
    let bottomEdge:number=Number(this.itemData.y)+Number(this.itemData.height);
    if(bottomEdge>this.boundaryY) {this.itemData.y=this.boundaryY-Number(this.itemData.height);}

    this.itemChangeEvent.emit(this.itemData);
    this.zIndex=1;
    this.dragDetailsVisible=false;
  }

  @HostListener("cdkDragStarted",["$event"])
  componentDragStart($event:CdkDragStart) {
    this.zIndex=100;
    this.dragDetailsVisible=true;
    this.mouseDownDetailsVisible=false;
    
  }

  @HostListener("cdkDragMoved",["$event"])
  componentDragged($event:any) {
    this.itemDraggedEvent.emit($event);
  }

  @HostListener("mousedown",["$event"])
  mouseDown($event:MouseEvent)
  {
    this.zIndex=100;
    this.mouseDownDetailsVisible=true;
    this.itemSelectedEvent.emit(this.itemData);
  }

  @HostListener("mouseup",["$event"])
  mouseUp($event:MouseEvent)
  {
    this.zIndex=1;
    this.mouseDownDetailsVisible=false;
  }

  @HostListener("mouseover",["$event"])
  mouseOver($event:MouseEvent)
  {
    this.mouseOverDetailsVisible=true;
  }
  
  @HostListener("mouseout",["$event"])
  mouseOut($event:MouseEvent)
  {
    this.mouseOverDetailsVisible=false;
  }

 
}
