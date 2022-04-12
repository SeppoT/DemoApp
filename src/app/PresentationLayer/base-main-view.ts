import { Directive, OnInit } from "@angular/core";
import { AppDataFacade } from "../AbstractionLayer/app-data-facade";

@Directive()
export abstract class BaseMainView implements OnInit {
    constructor(public appDataFacade:AppDataFacade) { }

    ngOnInit(): void {
    }
}
