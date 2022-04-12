import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoMainViewComponent } from "./PresentationLayer/demo-main-view/demo-main-view.component";

const routes: Routes = [
    { path: "main", component : DemoMainViewComponent },
    { path: "**", component :  DemoMainViewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
