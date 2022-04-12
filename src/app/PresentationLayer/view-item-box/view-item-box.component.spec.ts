import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ViewItem } from "src/app/Models/view-item";

import { ViewItemBoxComponent } from "./view-item-box.component";

describe("ViewItemBoxComponent", () => {
    let component: ViewItemBoxComponent;
    let fixture: ComponentFixture<ViewItemBoxComponent>;

    const viewdata:ViewItem = {
        "id":"1",
        "title":"testitem 1",
        "width":250,
        "height":250,
        "x":100,
        "y":100,
        "bgcolor":"#FFFFFF",
        "textcolor":"#000000"
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ViewItemBoxComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewItemBoxComponent);
        component = fixture.componentInstance;
        component.itemData=viewdata;
        fixture.detectChanges();
    });
 
  
    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
