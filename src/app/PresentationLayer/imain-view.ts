import { ViewItem } from "../Models/view-item";

export interface IMainView {
    reloadViewItems():void;
    itemChanged(viewitem:ViewItem):void;
}
