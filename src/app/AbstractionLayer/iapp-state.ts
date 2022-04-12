import { Observable } from "rxjs";
import { ViewItem } from "../Models/view-item";

export interface IAppState {
    getViewItems$():Observable<ViewItem[]>;
    updateViewItem(viewitem:ViewItem):void;
}
