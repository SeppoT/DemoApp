import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppDataFacade } from 'src/app/AbstractionLayer/app-data-facade';
import { Point, ViewItem } from 'src/app/Models/view-item';
import { IMainView } from '../imain-view';


@Component({
  selector: 'app-demo-main-view',
  templateUrl: './demo-main-view.component.html',
  styleUrls: ['./demo-main-view.component.css']
})
export class DemoMainViewComponent implements OnInit,IMainView,AfterViewInit {

  displayedColumns: string[] = ["id", "title","position"];

  viewAreaWidth:number=950;
  viewAreaHeight:number=700;

  verticalGuidePosition:number=0;
  horizontalGuidePosition:number=0;

  verticalGrid:Array<number>=new Array<number>();
  horizontalGrid:Array<number>=new Array<number>();

  @ViewChild('viewCanvas', {static: false}) viewCanvas!: ElementRef<HTMLCanvasElement>;
  public viewCanvasContext!: CanvasRenderingContext2D|null;
  private lastCanvasDot:Point|null=null;

  private lastDragPath:Array<[Point,Point]>=new Array<[Point,Point]>();

  private selectedViewItem!:ViewItem;

  constructor(public appDataFacade:AppDataFacade) {}

  ngOnInit(): void {
    this.reloadViewItems();
    this.buildGrid();
  }

  ngAfterViewInit(): void {
    this.initCanvas();
  }

  initCanvas():void {
    this.viewCanvas.nativeElement.width=this.viewAreaWidth;
    this.viewCanvas.nativeElement.height=this.viewAreaHeight;
    this.viewCanvasContext = this.viewCanvas.nativeElement.getContext('2d');
    console.log('context',this.viewCanvasContext);
    this.drawTestToCanvas();
  }

  reloadViewItems():void
  {
    this.appDataFacade.reloadViewItems();
  }

  itemChanged(viewitem:ViewItem):void {
    this.appDataFacade.updateViewItem(viewitem);    
  }

  itemSelected(viewitem:ViewItem):void {
    if(this.selectedViewItem==viewitem) {return;}
    
    this.lastDragPath=new Array<[Point,Point]>();
    this.selectedViewItem=viewitem;
    this.lastCanvasDot=null;
  }

  itemDragged($event:any):void {
    if(!this.selectedViewItem) {return;}
    this.drawDragToCanvas({x:$event.distance.x+this.selectedViewItem.x+25,y:$event.distance.y+this.selectedViewItem.y+25});
  }

  buildGrid():void
  {
    this.verticalGrid = new Array<number>();
    for(let i:number=0;i<this.viewAreaWidth;i=i+50)
    {
      this.verticalGrid.push(i);
    }

    for(let i:number=0;i<this.viewAreaHeight;i=i+50)
    {
      this.horizontalGrid.push(i);
    }    
  }

  drawTestToCanvas():void{
    //this.drawLineToCanvas([300,300],[700,200]);
  }

  drawLineToCanvas(startPoint:Point|null,endPoint:Point)
  {
    if(!this.viewCanvasContext) return;
    if(startPoint==null) return;

    this.viewCanvasContext.beginPath();
    this.viewCanvasContext.moveTo(startPoint.x,startPoint.y);
    this.viewCanvasContext.lineTo(endPoint.x,endPoint.y);
    this.viewCanvasContext.strokeStyle="red";
    this.viewCanvasContext.lineWidth=4;
    this.viewCanvasContext.lineCap="round";
    this.viewCanvasContext.stroke();
    this.viewCanvasContext.closePath();
  }

  drawDragToCanvas(point:Point)
  {
    if(!this.viewCanvasContext) return;
    if(point==this.lastCanvasDot) {return;}
    
    this.drawLineToCanvas(this.lastCanvasDot,point);
    this.lastCanvasDot=point;
    this.lastDragPath.push([this.lastCanvasDot,point]); 
  }

}

