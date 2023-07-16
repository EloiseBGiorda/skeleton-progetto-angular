import { Injectable } from "@angular/core";
import axios from "axios";
import { Detail } from "../models/drink-detail.model";
import { Drink } from "../models/drink.model";


@Injectable({providedIn:'root'})
export class ApiService {
    BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

    async getAllDrinks () {
        const response = axios.get(`${this.BASE_URL}/search.php?s=`).then((res) => {
            const data: Drink[] = res.data.drinks;
            return data;
        })
        return response;
    }

    async getSearchedDrinks(name: string) {
        const response = axios.get(`${this.BASE_URL}/search.php?s=${name}`).then((res) => {
            const data: Drink[] = res.data.drinks;
            return data;
        })
        return response;
    }
    async getDrinkDetailById(id:string){
        const response = axios.get(`${this.BASE_URL}/lookup.php?i=${id}`).then((res) => {
            const data: Detail = res.data.drinks[0];
            return data;
        })
        return response;
    }
}
    





