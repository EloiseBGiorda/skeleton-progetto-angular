import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Detail } from "../models/drink-detail.model";
import { ApiService } from "../services";
import { from } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DrinkDetailResolver implements Resolve<Detail>{

    constructor(private service: ApiService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Detail>{
            return  from(this.service.getDrinkDetailById(route.paramMap.get('id')!));
        }
    }
