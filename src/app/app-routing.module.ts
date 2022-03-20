import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './PresentationLayer/main-view/main-view.component';

const routes: Routes = [
    { path: 'main', component : MainViewComponent },
    { path: '**', component :  MainViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
