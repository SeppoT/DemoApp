import { Injectable } from "@angular/core";
import { HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NoopInterceptor } from "./noop-interceptor";
import { Observable } from "rxjs";
import { ViewItem } from "../Models/view-item";

@Injectable({
    providedIn: "root"
})

export class BackendApiService {

    readonly API = "./assets/viewitems.json";

    constructor(public http: HttpClient) { }

    getViewItems$(): Observable<ViewItem[]> {
        return this.http.get<ViewItem[]>(this.API);
    }

    addViewItem(): Observable<any> | null {
    /** Backend not implemented */
        return null;
    }

    updateViewItem(): Observable<any> | null {    
    /** Backend not implemented */
        return null;
    }

    deleteViewItem(): Observable<any> | null {
    /** Backend not implemented */
        return null;
    }

    saveToLocalStorage(items:ViewItem[]):void {
        const storage = window.localStorage;
        storage.setItem("demoitems",JSON.stringify(items));
    }

    loadFromLocalStorage():ViewItem[]|null {
        const storage = window.localStorage;
        const items = storage.getItem("demoitems");
        if (items)
        {
            return JSON.parse(items);
        }
        else
        {
            return null;
        }
    
    }
}

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];



