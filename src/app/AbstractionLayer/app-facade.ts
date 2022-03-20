import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppStateService } from "../CoreLayer/app-state.service";
import { BackendApiService } from "../CoreLayer/backend-api.service";
import { ViewItem } from "../Models/view-item";

@Injectable({
    providedIn: 'root',
  })
export class AppFacade {
    constructor(private appState:AppStateService,private appApi:BackendApiService){}

    getViewItems$() : Observable<ViewItem[]> {
        return this.appState.getViewItems$();
    }

    updateViewItem(viewitem:ViewItem)
    {
        this.appState.updateViewItem(viewitem);
        this.appApi.saveToLocalStorage(this.appState.getViewItems())
    }

    reloadViewItems() : void {

        let dataFromLocalStorage=this.appApi.loadFromLocalStorage();
        if(dataFromLocalStorage)
        {
            this.appState.setViewItems(dataFromLocalStorage);
        }
        else
        {
            this.appApi.getViewItems$().subscribe( data => {
                this.appState.setViewItems(data);
            })  
        }
    }
}
