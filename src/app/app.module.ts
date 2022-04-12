import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { httpInterceptorProviders } from "./CoreLayer/backend-api.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from "@angular/common/http";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatTableModule } from "@angular/material/table";
import { ViewItemBoxComponent } from "./PresentationLayer/view-item-box/view-item-box.component";
import { DemoMainViewComponent } from './PresentationLayer/demo-main-view/demo-main-view.component';


@NgModule({
    declarations: [
        AppComponent,
        ViewItemBoxComponent,
        DemoMainViewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        HttpClientModule,
        DragDropModule,
        MatTableModule
    ],
    providers: [
        httpInterceptorProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
