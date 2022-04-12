import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppStateService } from "../CoreLayer/app-state.service";
import { BackendApiService } from "../CoreLayer/backend-api.service";
import { DemoBackendApiServiceService } from "../CoreLayer/demo-backend-api-service.service";
import { ViewItem } from "../Models/view-item";
import { IAppBackend } from "./iapp-backend";
import { IAppState } from "./iapp-state";

@Injectable({
    providedIn: "root",
})
export abstract class AppDataFacade implements IAppState,IAppBackend {
    constructor(private appState:AppStateService,private appApi:DemoBackendApiServiceService){}

    getViewItems$() : Observable<ViewItem[]> {
        return this.appState.getViewItems$();
    }

    updateViewItem(viewitem:ViewItem)
    {
        this.appState.updateViewItem(viewitem);
        this.appApi.saveToLocalStorage(this.appState.getViewItems());        
    }

    reloadViewItems() : void {

        const dataFromLocalStorage=this.appApi.loadFromLocalStorage();
        if(dataFromLocalStorage)
        {
            this.appState.setViewItems(dataFromLocalStorage);
        }
        else
        {
            this.appApi.getViewItems$().subscribe( data => {
                this.appState.setViewItems(data);
            });  
        }
    }
}
