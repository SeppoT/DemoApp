import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ViewItem } from "../Models/view-item";

@Injectable({
    providedIn: "root"
})
export class AppStateService {

    private updating$ = new BehaviorSubject<boolean>(false);
    private viewItems$ = new BehaviorSubject<ViewItem[]>([]);

    isUpdating$() {
        return this.updating$.asObservable();
    }

    setUpdating(isUpdating: boolean) {
        this.updating$.next(isUpdating);
    }

    getViewItems$() {
        return this.viewItems$.asObservable();
    }

    getViewItems() {
        return this.viewItems$.getValue();
    }

    setViewItems(viewItems:ViewItem[]) {
        this.viewItems$.next(viewItems);
    }

    addViewItem(viewItem:ViewItem) {
        const currentItems = this.viewItems$.getValue();
        this.viewItems$.next([...currentItems,viewItem]);
    }

    updateViewItem(updatedItem:ViewItem) {
        const currentItems = this.viewItems$.getValue();
        const updateindex = currentItems.findIndex(item => item.id === updatedItem.id);
        currentItems[updateindex] = updatedItem;
        this.viewItems$.next([...currentItems]);
    }

    updateViewItemId(replaceViewItem:ViewItem,replacedItemWithId:ViewItem) {
        const currentItems = this.viewItems$.getValue();
        const updatedItemIndex = currentItems.findIndex(item => item === replaceViewItem);
        currentItems[updatedItemIndex] = replacedItemWithId;
        this.viewItems$.next([...currentItems]);
    }

    deleteViewItem(deleteViewItem:ViewItem) {
        const currentItems = this.viewItems$.getValue();
        this.viewItems$.next(currentItems.filter(item => item !== deleteViewItem));
    }

}
